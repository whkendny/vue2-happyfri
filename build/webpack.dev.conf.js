var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
// 使用 html-webpack-plugin 插件，这个插件可以帮我们自动生成 html 并且注入到 .html 文件中
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks(将需要进行热刷新的代码放进配置的入口entry)
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  // [ './build/dev-client', './src/main.js' ]
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

//将baseWebpackConfig与后面{}中的配置进行合并
module.exports = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    plugins: [ //相关的插件列表
        new webpack.DefinePlugin({// https://segmentfault.com/q/1010000007464696
          // 配置"魔法全局变量", 这里面的标识就相当于全局变量，你的业务代码可以直接使用配置[process.env]的标识
          // 常用户区分开发环境及生产环境;

          // vuejs 里会根据'process.env'标识去缩小代码输出减小压缩包的大小，还比如如果你用到webpack的高级功能‘热替换’时，
          //需要开启代理访问如java，nodejs 的后台服务时也要一个标识,等等。
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        // 这些插件可以根据你的应用程序的使用程度来优化块和模块。
        new webpack.optimize.OccurenceOrderPlugin(),
        // 开启模块热替换
        new webpack.HotModuleReplacementPlugin(),
        //跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
        new webpack.NoErrorsPlugin(),

        // https://github.com/ampedandwired/html-webpack-plugin
        // 将index.html作为入口，注入html代码后生成 index.html文件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
})
