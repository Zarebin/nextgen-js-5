const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpack = require('webpack');
const path  = require('path');

module.exports ={
	entry: './src/index.js',
	output: {
		path:path.resolve(__dirname, './dist'),
			filename:'bundle.js',

	},
	 module: {
    rules: [
      {
        test: /\.css/i,
		  use: ["style-loader", "css-loader" ,],
	  },
		{
			test: /\.scss$/i,
			use: [
				"style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",

			],
		},
    ],
	 },
	 plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
	mode:'development',


};
