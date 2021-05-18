module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  runtimeCompiler: true,
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      externals: ["knex", "sqlite3"],
      productName: "vue electron sqlite3",
      builderOptions: {
        asar: false,
        extraResources: [
          {
            from: "./extraResources/",
            to: "extraResources",
            filter: ["**/*"]
          }
        ]
      }
    }
  }
};
