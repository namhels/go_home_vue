const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // pages: {
  //   index: {
  //     // entry for the page
  //     entry: "src/main.js",
  //     title: "go_home",
  //   },
  // },

  // chainWebpack: (config) => {
  //   config.plugin("html").tap((args) => {
  //     args[0].title = "go_home";
  //     return args;
  //   });
  // },
});
