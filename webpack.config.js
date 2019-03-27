var webpack = require('webpack')
const path = require('path')
const ClearWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].js',   //输出文件名称
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  devServer: {  //web服务
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,   //端口
    open: true, //第一次打开浏览器
    hot: true, //是否监听
    publicPath: "/" //访问的目录
  },
  module: {
    rules: [{
      // js babel处理
      test: /\.js$/,
      use: ['babel-loader']
    }, {
      // 图片处理
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]'
        }
      }]
    }]
  },
  devtool: 'source-map',
  plugins: [
    new ClearWebpackPlugin(),
    new ParallelUglifyPlugin({
      // 传递给 UglifyJS的参数
      uglifyJS: {
        output: {
          beautify: false,
          comments: false
        },
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true
        }
      }
    }),
    //将js自动插入到html里
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin() //引入热更新插件
  ]
}