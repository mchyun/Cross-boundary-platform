module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'http://172.24.246.217:10085/', // 接口的域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {'^/api': ''}
      },
      '/tim': {
        target: 'https://console.tim.qq.com/',
        secure: true,
        changeOrigin: true,
        pathRewrite: {'^/tim': ''}
      }
    }
  },
}