const path = require("path");
const stylexPlugin = require("@stylexjs/nextjs-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  aliases: {
    "@/*": [path.join(__dirname, "*")],
  },
  rootDir: __dirname,
};

// module.exports = nextConfig;

module.exports = stylexPlugin(nextConfig)({});
