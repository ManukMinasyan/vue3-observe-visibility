import base from './rollup.config.base.mjs'

const config = Object.assign({}, base, {
	output: {
		name: 'vue-observe-visibility',
		file: 'dist/vue-observe-visibility.esm.js',
		format: 'es',
	},
})

export default config
