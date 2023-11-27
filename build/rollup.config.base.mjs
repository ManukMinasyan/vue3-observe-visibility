import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import cjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import config from '../package.json' assert { type: "json" };

export default {
	input: 'src/index.ts',
	plugins: [
		resolve({
			mainFields: ['module', 'main'],
			browser: true,
		}),
		babel({
			exclude: 'node_modules/**',
			babelHelpers: true,
		}),
		cjs(),
		replace({
			preventAssignment: true,
			VERSION: JSON.stringify(config.version),
		}),
		typescript(/*{ plugin options }*/),
		terser()
	],
	watch: {
		include: 'src/**',
	},
}
