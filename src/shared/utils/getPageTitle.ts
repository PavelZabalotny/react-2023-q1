import { ROUTER_CONFIG } from "@/shared/routerConfig";

export default function getPageTitle(pathname: string) {
  const foundElements = ROUTER_CONFIG.filter((route) => route.path === pathname);
  if (foundElements.length === 1) {
    const pageName = foundElements.shift()!;
    return pageName.title;
  }

  return "Page not found";
}
