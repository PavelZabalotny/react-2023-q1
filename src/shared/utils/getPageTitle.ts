import { IRouterPath } from "@/interfaces/routerPath.interface";

export default function getPageTitle(routerConfig: IRouterPath[]) {
  const { pathname } = location;

  if (routerConfig.some((route) => route.path.includes(pathname))) {
    const foundElements = routerConfig.filter((route) => route.path === pathname);
    if (foundElements.length === 1) {
      const pageName = foundElements.shift()!;
      return pageName.title;
    }
  }

  return "Page not found";
}
