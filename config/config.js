var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var page=["index","template"];
var config={};
config.pagePlugin=[];
config.entry={};
page.forEach(function(item){
    config.pagePlugin.push(
    	new HtmlWebpackPlugin({
            filename: path.join(__dirname,'../complete/'+item+'.html'),   //目标文件
            template: path.join(__dirname,'../temp/'+item+'.html'), //模板文件
            inject:'body',
            hash:true,  //代表js文件后面会跟一个随机字符串,解决缓存问题
            chunks:[item]
        })
    );
    config.entry[item]=path.join(__dirname, '../entry/'+item+'.js');
});
module.exports=config;