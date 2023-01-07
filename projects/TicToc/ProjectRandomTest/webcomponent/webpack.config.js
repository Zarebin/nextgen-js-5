const path =require('path');
module.exports={
	entry:'./src/index.ts',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname ,'./dist'),
		filename:'gamebundle.js'
	},
	module:{
		rules:[
			{test:/\.css$/,use:'css-loader'},
			{test:/\.ts/,use:'ts-loader'}
		],
	},
	resolve: {
		extensions: ['.ts'],
	},
	mode:'development'




}
