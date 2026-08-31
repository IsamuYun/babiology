# familymakers.com/for-surrogates —— 离线镜像

仅作为**设计参考**抓取，用于借鉴页面结构与视觉风格。原站为 Squarespace 搭建。

- 抓取源: https://www.familymakers.com/for-surrogates
- 抓取日期: 2026-08-29

## 目录结构

```
for-surrogates.html          页面 HTML（所有资源引用已改写为本地相对路径）
STRUCTURE.md                 自动提取的 section / 标题大纲（信息架构速览）
asset-map.json               原始 URL -> 本地文件 的映射表
assets/
  css/        4 个站点级样式表（site / static / custom / user-account）
  js/         17 个脚本（含 Squarespace site-bundle、jQuery 等）
  img/        页面图片 + 图标 + logo
  fonts/      自托管字体
  components/ Squarespace 组件级 CSS/JS（button / summary / imageFluid 等 38 个）
  other/      其余杂项
```

## 本地预览

`file://` 打开会因相对路径与脚本限制显示不全，用静态服务器：

```bash
cd docs/design/familymakers
python3 -m http.server 8899
# 浏览器打开 http://localhost:8899/for-surrogates.html
```

已验证：布局、字体、配色、导航、Hero 大图、图文栏目、证言区、页脚均正常渲染，18 张图片无一破图。
滚动时部分区块淡入（Squarespace 的 scroll-reveal），属正常行为。

## 注意

- 未抓取: Google Tag Manager、Google Fonts 预连接、外链社交页面 —— 这些是统计/外链，不影响版式。
- 站点导航链接仍指向线上原站，本镜像只有 `/for-surrogates` 这一页。
- 内容与图片版权归 Family Makers 所有，仅供内部设计参考，不要直接复用文案或照片。
