var webpack = require('webpack')
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require(path.join(__dirname,"config/config.js"));
module.exports = {
  entry: config.entry,
  output: {
    path: path.join(__dirname, 'complete/src/bundle'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader'},//vue加载器
      { test: /\.css$/, loader: 'style-loader!css-loader',include : path.resolve(__dirname,'complete/src/styles')},//css加载器
      { test: /\.js$/,exclude: /node_modules/, loader: "babel-loader", query: {presets: ['es2015']}, exclude : path.resolve(__dirname,'node_modules')},//babel加载器
      { test: /\.html$/, loader: 'html-loader' },//vue加载器
      { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader'},//sass加载器
      // { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},//less加载器
      { test: /\.(jpg|png)$/, loader: "url-loader?limit=8192"},//打包图片
    ]
  },
  resolve: {
        modules: [
          path.resolve(__dirname,'./complete'),
          path.resolve(__dirname,'./vue'),
          path.resolve(__dirname,'./temp'),
          path.resolve(__dirname,'./entry')
        ],
        extensions: ['.js', '.json', '.scss', '.png', '.jpg'],
        alias: {
            style: path.join(__dirname, 'complete/src/styles'),
            js: path.join(__dirname, 'complete/src/javascripts'),
            img: path.join(__dirname, 'complete/src/images'),
            vue: path.join(__dirname, 'complete/src/lib/vue.min.js'),
            vueRouter: path.join(__dirname, 'complete/src/lib/vue-router.min.js'),
            jquery: path.join(__dirname, 'complete/lib/jquery.min.js')
        }
  },
   plugins:config.pagePlugin.concat([
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery",
            Vue:"vue"
        }),
    ])
}