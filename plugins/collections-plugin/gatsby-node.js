const jsYaml = require(`js-yaml`);
const _ = require(`lodash`);

function urlSafe(str) {
  return encodeURI(_.kebabCase(str.toLocaleLowerCase()));
}

exports.onCreateNode = async (
  {
    node,
    actions: { createNode, createParentChildLink },
    loadNodeContent,
    createNodeId,
    createContentDigest,
  },
  { instanceType, collectionKey, locales, defaultLocale }
) => {
  // we only care about collection yaml files
  if (
    node.sourceInstanceName !== instanceType ||
    node.internal.mediaType !== `text/yaml` ||
    // match `xxx.collection.en.yaml` and `/collection/xxx.yaml`
    !(
      node.base.includes(`.${collectionKey}.`) ||
      node.relativePath.includes(`/${collectionKey}/`)
    )
  ) {
    return;
  }

  const isListType = node.base.includes(`.${collectionKey}.`);
  const content = await loadNodeContent(node);
  const parsedContent = jsYaml.load(content);

  function createYamlNode({ name = "", id, obj, locale }) {
    // dedupe the name so we don't have VideosVideosCollectionCollection etc.
    const fullName = `${node.relativePath
      .split("/")
      .slice(0, -1)
      .join(" ")} ${name} ${collectionKey}`;

    const deduped = fullName
      .split(" ")
      .reduce(
        (a, n) =>
          a.includes(n.toLocaleLowerCase())
            ? a
            : a.concat(n.toLocaleLowerCase()),
        []
      )
      .join(" ");

    const type = _.upperFirst(_.camelCase(deduped));

    const yamlNode = {
      ...obj,
      locale,
      slug: `${
        obj.date ? new Date(obj.date).toISOString().split("T")[0] + "-" : ""
      }${urlSafe(obj.title)}`,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type,
      },
    };
    // pass the original ID back
    if (obj.id) {
      yamlNode[`yamlId`] = obj.id;
    }
    createNode(yamlNode);
    createParentChildLink({ parent: node, child: yamlNode });
  }

  if (isListType) {
    // hack for netlify cms https://github.com/netlify/netlify-cms/issues/531
    const content = parsedContent.items;
    if (!_.isArray(content)) {
      throw new Error(`Collection incorrectly formatted: ${node.absolutePath}`);
    }
    const [name] = node.name.split(".");
    content.forEach((o, i) => {
      const { locale = defaultLocale, ...obj } = o;
      const id = createNodeId(`${node.id} [${i}] >>> YAML`);
      createYamlNode({ id, name, obj, locale });
    });
  } else {
    Object.keys(locales)
      .map((locale) => ({ ...locales[locale], locale }))
      .filter(({ enabled }) => enabled)
      .forEach(({ locale }) => {
        const id = createNodeId(`${node.id} [${locale}] >>> YAML`);
        const { i18n = {}, ...o } = parsedContent;
        const obj = { ...o, ...i18n[locale] };
        createYamlNode({ id, obj, locale });
      });
  }
};
