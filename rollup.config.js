import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
	input: './src/js/script.js',
	output: {
		file: './assets/js/script.js',
		format: 'es',
		name: 'bundle',
	},
	watch: {
		include: ['src/**/*'],
		exclude: './assets/js/script.js',
	},
	plugins: [nodeResolve({ jsnext: true })],
};
