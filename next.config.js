// @see: https://stylexjs.com/docs/learn/installation/
const stylexPlugin = require("@stylexjs/nextjs-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  rootDir: __dirname,
};

module.exports = stylexPlugin(nextConfig)({});
