module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'react-native/react-native': true,
	},
	'extends': [
		'plugin:react/recommended',
		'google',
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	'plugins': [
		'react',
		'react-native',
	],
	'rules': {
		'require-jsdoc': 0,
		'max-len': ['error', {'code': 120}],
		'no-tabs': 0,
		'indent': 'off',
		"spaced-comment": false
	},
};
