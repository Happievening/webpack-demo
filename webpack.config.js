const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'hello！',
			template: './src/index.html',
		}),
	],
	module: {
		rules: [{ test: /.css$/i, use: ['style-loader', 'css-loader'] }],
	},
}
