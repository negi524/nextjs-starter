// @see: https://stylexjs.com/docs/learn/installation/
const path = require("path");
module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: process.env.NODE_ENV === "development",
        runtimeInjection: false,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        aliases: {
          "@/*": [path.join(__dirname, "*")],
        },
        unstable_moduleResolution: {
          type: "commonJS",
          // TODO: ダメだったら戻す
          // rootDir: __dirname,
          rootDir: path.join(__dirname, "../.."),
        },
      },
    ],
  ],
};
