const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = function override(config) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "@components": resolve("src/components"),
    "@constants": resolve("src/constants"),
  });

  return config;
};
