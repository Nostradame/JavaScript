module.exports = {
	entry: "./lib_react.tsx",
	output: {
		filename: "../JavaScript/Scripts/bundle.js"
	},
	watch: true,
	resolve: {
		extensions: [".webpack.js", ".ts", ".tsx"]
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