const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'dist',
  publicPath:'./',
  pwa: {

    iconPaths: {

      favicon32: 'favicon.ico',

      favicon16: 'favicon.ico',

      appleTouchIcon: 'favicon.ico',

      maskIcon: 'favicon.ico',

      msTileImage: 'favicon.ico'

    }
  }
})
