var path = require('path')
var config = require('../config')
var utils = require('./utils')

//path.resolve(): 将一系列路径或路径段解析为绝对路径。
// 如果__dirname为: /static_files/png/, projectRoot ==> /static_files/
var projectRoot = path.resolve(__dirname, '../')

// 开发环境是`production`还是'development'
var env = process.env.NODE_ENV
    // check env & config/index.js to decide weither to enable CSS Sourcemaps for the
    // various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
    entry: {
        app: './src/main.js'  // 唯一入口文件
    },
    output: {  // 打包输出文件
        path: config.build.assetsRoot, //打包后的文件存放的地方(本地构建地址)
        // 构建后在html里的路径，一般也是用这个来指定上线后的cdn域名。
        // 参见: https://segmentfault.com/q/1010000007409246?_ea=1336702
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js' //打包后输出文件的文件名
    },
    //设置模块如何被解析
    resolve: {
        extensions: ['', '.js', '.vue', '.less', '.css', '.scss'],  //自动解析确定的扩展
        // 如当前的`__dirname`为: /build/; fallback则为/node_modules
        // 一个目录(或者目录绝对目录的数组)。如果webpack 在 resolve.root 或者
        // resolve.modulesDirectories 实在找不到某个模块了，会去这个（些）目录中找。
        fallback: [path.join(__dirname, '../node_modules')],
        // 创建一些别名, 确保模块引入变量变得更简单
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    //loaders的配置需要在modules中进行
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,   // 一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
            loader: 'babel', // loader的名称（必须）
            include: projectRoot, // 手动添加必须处理的文件（文件夹）（可选）；
            exclude: /node_modules/ // 屏蔽不需要处理的文件（文件夹）（可选）;
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {  // 为loaders提供额外的设置选项（可选）
                limit: 10000,
                name: utils.assetsPath('img/[name].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: useCssSourceMap
        }),
        postcss: [
            require('autoprefixer')({ //进行兼容性处理
                browsers: ['last 10 versions']
            })
        ]
    }
}
