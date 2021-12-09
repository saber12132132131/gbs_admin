// const path = require('path')

module.exports = {
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    }
  }
}
