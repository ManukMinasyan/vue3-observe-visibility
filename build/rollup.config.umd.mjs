import base from './rollup.config.base.mjs'

const config = Object.assign({}, base, {
	output: {
		exports: 'named',
		name: 'vue-observe-visibility',
		file: 'dist/vue-observe-visibility.umd.js',
		format: 'umd',
	},
})

export default config
