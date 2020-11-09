import * as path from 'path';
import { lib as sls } from 'serverless-webpack';
import * as nodeExternals from 'webpack-node-externals';

module.exports = {
	entry: sls.entries,
	target: 'node',
	mode: sls.webpack.isLocal ? 'development' : 'production',
	module: {
		rules: [{ test: /.ts$/, exclude: /node_modules/, loader: 'ts-loader', options: { transpileOnly: true } }],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	externals: [
		nodeExternals(),
		nodeExternals({
			modulesDir: path.resolve(__dirname, '../../node_modules'),
		}),
	],
};
