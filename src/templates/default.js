import { graphql } from "gatsby";

import LayoutGlobal from "../components/globalLayout";
import Content from "../components/content";

export default function DefaultTempalte(props) {
  return (
    <LayoutGlobal {...props}>
      <Content {...props} />
    </LayoutGlobal>
  );
}

export const pageQuery = graphql`
  query MDXQuery($basePath: String!, $mdxSlug: String) {
    mdx(slug: { eq: $mdxSlug }) {
      body
      toc: tableOfContents
      excerpt(pruneLength: 180, truncate: true)
      headings(depth: h1) {
        value
      }
      fields {
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              placeholder: NONE
              formats: [PNG]
              layout: CONSTRAINED
              width: 1200
            )
          }
        }
      }
      meta: frontmatter {
        title
        seo
        license
        showNext
        date
        author
        contribute
        contributors
        disclaimer
        updated
        info
      }
    }
    contributors: allContributorAvatar(filter: { page: { eq: $basePath } }) {
      edges {
        node {
          githubId
          githubImage {
            childImageSharp {
              gatsbyImageData(
                width: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
