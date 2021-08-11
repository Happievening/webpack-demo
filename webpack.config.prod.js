const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.config.base')

module.exports = {
	...base,
	mode: 'production',
	plugins: [
		...base.plugins,
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].css',
		}),
	],
	module: {
		rules: [
			...base.module.rules,
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						},
					},
					'css-loader',
				],
			},
		],
	},
}
