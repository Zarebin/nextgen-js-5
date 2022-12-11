//webpack config file
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
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
	  {
		  test: /\.css$/i,
		  use: ['style-loader', 'css-loader']
	  },
	  {
		  test: /\.txt$/,
		  use: 'raw-loader',
	  }
    ]
  },
  plugins: [
    new HtmlWebpackP({ template: './src/index.html'})
  ],
  mode: 'development'
}
