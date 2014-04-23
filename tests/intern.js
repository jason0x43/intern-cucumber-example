define({
	proxyPort: 9000,
	proxyUrl: 'http://10.0.1.105:9000/',
	capabilities: {
		'selenium-version': '2.39.0'
	},
	environments: [
		{ browserName: 'chrome' }
	],
	maxConcurrency: 3,
	useSauceConnect: false,
	webdriver: {
		// host: 'localhost',
		host: '10.0.1.123',
		port: 4444

	},
	useLoader: {
		'host-node': 'dojo/dojo',
		'host-browser': 'node_modules/dojo/dojo.js'
	},
	loader: {
		// Packages that should be registered with the loader in each testing environment
		packages: [
			{ name: 'app', location: 'app' },
			{ name: 'tests', location: 'tests' }
		]
	},
	suites: [ 'tests/unit' ],
	functionalSuites: [ 'tests/functional' ],
	//excludeInstrumentation: /./
	excludeInstrumentation: /(?:node_modules|tests)\//
});
