define({
	proxyPort: 9000,
	proxyUrl: 'http://10.0.1.105:9000/',
	capabilities: {
		'selenium-version': '2.42.0'
	},
	environments: [
		{ browserName: 'chrome' }
	],
	maxConcurrency: 3,
	tunnel: 'NullTunnel',
	loader: {
		packages: [
			{ name: 'app', location: 'app' },
			{ name: 'tests', location: 'tests' },
			{ name: 'dojo', location: 'node_modules/dojo' }
		]
	},
	suites: [ 'tests/unit' ],
	functionalSuites: [ 'tests/functional' ],
	excludeInstrumentation: /(?:node_modules|tests)\//
});
