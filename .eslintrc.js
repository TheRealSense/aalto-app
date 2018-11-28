module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"node": true,
        "es6": true
	},
	"plugins": [
		"react"
	],
    "extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
    "parserOptions": {
		"ecmaVersion": 2015,
		"sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};
