const path =require('path');
module.exports={
	entry:'./src/index.js',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname ,'./dist'),
		filename:'gamebundle.js'
	},
	module:{
		rules:[
			{test:/\.css$/,use:'css-loader'},
			{test:/\.tsx?$/,use:'ts-loader',
			exclude: /node_modules/,
		     }
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts' , 'js'],
	},
	mode:'development'




}
