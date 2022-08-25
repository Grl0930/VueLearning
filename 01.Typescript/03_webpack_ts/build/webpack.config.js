const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: {
        app: './src/main.ts' // 程序主入口文件
    },

    output: {
        path: resolve('dist'), // 打包后的文件放的位置
        filename: '[name].[contenthash:8].js' // 产生的js文件的命名方式 app.8位的哈希值.js
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader', // 编译处理ts文件的
            include: [resolve('src')]
        }]
    },

    plugins: [
        new CleanWebpackPlugin({}),
        // 清除dist下之前生成的js文件
        new HtmlWebpackPlugin({
            template: './public/index.html'
            // 打包html文件
        })
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js'] //  对'.ts', '.tsx', '.js'扩展名处理
    },

    devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map', // 错误的提示信息


    devServer: {
        host: 'localhost', // 主机名
        stats: 'errors-only', // 打包日志输出输出错误信息
        port: 8085,
        open: true
    },
}
// 引入依赖的命令
// npm install -D typescript
// npm install -D webpack@4.41.5 webpack-cli@3.3.10
// npm install -D webpack-dev-server@3.10.2
// npm install -D html-webpack-plugin clean-webpack-plugin  // 打包html的内容、清除打包好的json文件
// npm install -D ts-loader --legacy-peer-deps // 针对ts文件 --legacy-peer-deps //高版本的NPM在安装时会报错 添加这个代码
// npm install -D cross-env --legacy-peer-deps
