/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@routes': path.resolve(__dirname, 'src/routes'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@ts': path.resolve(__dirname, 'src/ts'),
			'@api': path.resolve(__dirname, 'src/api')
		},
		configure: (webpackConfig: any) => {
			// !! configure 是本次打包要关注的内容
			webpackConfig.output.path = path.resolve(__dirname, 'dist')
			path.appBuild = path.resolve(__dirname, 'dist')
			return webpackConfig
		},
		rules: [
			{
				test: /\.(jsx|js|ts|tsx)$/,
				include: [path.resolve(__dirname, 'src')],
				exclude: [/node_modules/],
				use: ['eslint-loader'],
				enforce: 'pre'
			}
		]
	},
	devServer: {
		open: true,
		port: 3006,
		client: {
			progress: true // 在浏览器中以百分比显示编译进度。
		}
	},
	eslint: {
		enable: true,
		mode: 'extends'
	}
}
