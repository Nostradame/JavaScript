module.exports = {
	entry: "./lib_react.tsx",
	output: {
		filename: "../JavaScript/Scripts/bundle.js"
	},
	resolve: {
		extensions: ['.js', '.jsx', '.webpack.js', '.ts', '.tsx']
	},
	module: {
		loaders: [
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				loader: "ts-loader"
			}
		]
	}
}