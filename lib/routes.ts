/**
 * 采用新版品牌设计的页面自带 header / footer（src/sections/homepage 下的
 * SiteHeader / SiteFooter），全局 NavBar / Footer 在这些路由上不渲染，以免重复。
 * next.config 开启了 trailingSlash，因此两种写法都要匹配。
 */
const redesignedRoutes = new Set([
  "/",
  "/en",
  "/en/",
  "/contact",
  "/contact/",
  "/en/contact",
  "/en/contact/"
]);

export function isRedesignedRoute(pathname: string | null) {
  return pathname !== null && redesignedRoutes.has(pathname);
}
