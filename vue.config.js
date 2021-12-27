module.exports = {
    publicPath: "/",
    devServer: {
        open: true, // 自动打开浏览器
        host: '0.0.0.0', // 真机模拟，使用
        port: '8080', // 前台代理端口号
        https: false, // https： {type: Booleam}
        hotOnly: true, // 热更新
        proxy: {
            '/online': {
                target: 'http://localhost:8081/online', // 要访问的跨域的域名
                // ws: true, // 如果要代理websockets
                changeOrigin: true, // 开启代理
                pathRewrite: { // 路径重写
                    '^/online/api': '' // 使用 `/api` 代替 `target` 要访问的跨域的域名
                }
            }
        }
    }
}