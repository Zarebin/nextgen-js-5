const path = require('path');
const HtmlWebpackP = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
	  {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
	  },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackP({ template: './src/index.html'})
  ],
  mode: 'development',
  //to recompile whenever files change:
  //watch: true,
  watchOptions: {
		ignored: /node_modules/,
		poll: 1000
	},
  //For running dev server in docker:
  devServer: {
		compress: false,
		host: "0.0.0.0", //use this instead of localhost
		port: 3000,
		//disableHostCheck: true
	}
}
