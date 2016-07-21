var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	//this pulugin config creates a new index page based on our existing
	//one and inserts the new javascript path for us
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports={
	//the entry file for webpack
	entry:[
		'./app/index.js'
	],
	//the output location for webpack
	output:{
		path:__dirname + '/dist',
		filename: "index_bundle.js"
	},
	//the modules to run against the code when webpack moves it from 
	//input to output, in this case react jsx transformer so far
	module:{
		loaders:[{
			test:/\.js$/, 
			exlude: /node_modules/, 
			loader: "babel-loader"
		}]
	},
	plugins: [HtmlWebpackPluginConfig]
}