const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // outputDir: 'docs',
  // publicPath: process.env.NODE_ENV === "production" ? process.env.VUE_APP_PUBLIC_URL : "/",
  publicPath: process.env.NODE_ENV === "production" ? "/vue01/" : "/",
})
