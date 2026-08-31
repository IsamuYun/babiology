import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      "@next/next/no-css-tags": "off"
    }
  },
  {
    // docs/design/familymakers 是抓取的第三方站点镜像，不是本项目代码
    ignores: [".next/**", "node_modules/**", "out/**", "docs/design/familymakers/**"]
  }
];

export default eslintConfig;
