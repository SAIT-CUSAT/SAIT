/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["www.droptica.com","cdn.sanity.io"],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "src/common/styles")],
  },
};
