module.exports = {
	entry:"./src/index.js",
	mode:"development",
	// devtool:'inline-source-map',
	devServer: {
		contentBase:'./dist'
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				exclude:/node_modules/,
				loader:"babel-loader",
				options:{
					presets:["env","react","stage-2"]
				}
			},
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use:[
					'file-loader'
				]
			}
		]
	}
}