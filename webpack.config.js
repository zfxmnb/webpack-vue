var webpack = require('webpack')
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    "index":path.join(__dirname, 'entry/entry.js'),
    "page":'./entry/page.js'
  },
  output: {
    path: path.join(__dirname, 'javascripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader:'vue-loader'},
      //{ test: /\.css$/, loader: 'style-loader!css-loader' },//css加载器
      { test: /\.js$/,exclude: /node_modules/, loader: "babel-loader",query:{presets: ['es2015']}},//babel加载器
      //{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},//sass加载器
      //{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},//less加载器
      //{ test: /\.ejs$/, loader: 'ejs-loader'},//ejs模板加载器
      //{ test: /\.(jpg|png)$/, loader: "url-loader?limit=8192"},//打包图片
    ]
  },
  resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        Vue: path.join(__dirname, 'node_modules/vue/dist/vue.min.js')
      }
  },
   plugins:[
        new HtmlWebpackPlugin({
            filename:__dirname+'/dist/index.html',   //目标文件
            template: __dirname+'/temp/temp.html', //模板文件
            inject:'body',
            //hash:false,  //代表js文件后面会跟一个随机字符串,解决缓存问题
            chunks:["index"]
        }),
        new HtmlWebpackPlugin({
        	filename:__dirname+'/dist/page.html',   //目标文件
            template: __dirname+'/temp/temp_page.html', //模板文件
            inject:'body',
            //hash:false,  //代表js文件后面会跟一个随机字符串,解决缓存问题
            chunks:["page"]
        })
    ]
}