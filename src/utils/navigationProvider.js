import React, { createContext, useContext } from "react";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

const NavigationContext = createContext();

function useNavigation() {
  return useContext(NavigationContext);
}

function NavigationProvider({
  children,
  pageContext: { basePath, filterBase },
}) {
  const { navItems } = useGlobals();
  const pagePath = filterBase || `/${basePath}`;
  // recursively find submenus from basePath
  const levels = [{ navItems }];
  function getLevels(d = 0) {
    const level = levels[d];
    if (!level || !level.navItems) {
      return;
    }
    // find the child level
    const nextLevel = level.navItems.find(
      (l1) =>
        pagePath.startsWith(l1.link) ||
        l1.navItems?.find((l2) => pagePath.startsWith(l2.link))
    );
    if (nextLevel) {
      nextLevel.current = true;
      nextLevel.navItems = nextLevel.navItems?.filter(({ hidden }) => !hidden);
      levels.push(nextLevel);
      getLevels(d + 1);
    }
  }
  getLevels();
  const current = levels[levels.length - 1];

  const next =
    (levels[levels.length - 1].navItems &&
      levels[levels.length - 1].navItems[0]) ||
    levels[levels.length - 2]?.navItems[
      levels[levels.length - 2].navItems.findIndex(({ current }) => current) + 1
    ] ||
    levels[levels.length - 3]?.navItems[
      levels[levels.length - 3].navItems.findIndex(({ current }) => current) + 1
    ];

  const [{ navItems: main }, _sub, subSub] = levels;
  const sub = _sub && !_sub.hideTop ? _sub : null;
  return (
    <NavigationContext.Provider value={{ main, sub, subSub, next, current }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider, NavigationContext, useNavigation };
