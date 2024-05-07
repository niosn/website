module.exports = {
  publicPath: '/website',
  outputDir: process.env.VUE_APP_OUTPUTDIR,
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 8377,
    open: false,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/weiboapi': {
        target: 'https://s.weibo.com/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/weiboapi': ''
        }
      },
      '/smzdmapi': {
        target: 'https://www.smzdm.com/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/smzdmapi': ''
        }
      }
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  configureWebpack: () => ({
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true
          },
          runtimeChunk: {
            name: 'manifest'
          }
        }
      }
    }
  })
}
