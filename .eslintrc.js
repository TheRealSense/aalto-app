module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true,
		es6: true
	},
	plugins: ['react', 'prettier'],
	extends: [
		'airbnb',
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
		'prettier/react',
		'eslint-config-prettier'
	],
	parserOptions: {
		ecmaVersion: 2015,
		sourceType: 'module'
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'import/no-unresolved': 'off',
		"react/destructuring-assignment": [1, 'always'],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
	}
}
