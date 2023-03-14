import { IRouterPath } from "../../types/routerPath.interface";

export default function getPageTitle(config: IRouterPath[]) {
  const { pathname } = window.location;

  const keys = Object.keys(config);
  if (keys.includes(pathname)) {
    const foundElements = config.filter((item) => item.path === pathname);
    if (foundElements.length === 1) {
      const pageName = foundElements.shift()!;
      return pageName.title;
    }
  }

  return "Page not found";
}
