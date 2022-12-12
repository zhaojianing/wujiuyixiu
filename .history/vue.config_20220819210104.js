const { defineConfig } = require('@vue/cli-service')
const PrerenderSPAPlugin = require('prerender-spa-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  // outputDir:'dist',
  publicPath:'./',
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [  // 需要预渲染的路由地址(需要打包成几个页面就配置几个路由)
          '/',
          '/about',
          '/home',
          '/xuankongpaipan',
          '/maoshanpaipan',
        ],
      }),
    ],
  },
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
