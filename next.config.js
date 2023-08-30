/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["www.droptica.com","tailwindui.com","cdn.sanity.io","www.google.com"],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "src/common/styles")],
  },
};
