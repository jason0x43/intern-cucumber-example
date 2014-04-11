define({
	proxyPort: 9000,
	proxyUrl: 'http://localhost:9000/',
	capabilities: {
		'selenium-version': '2.39.0'
	},
	environments: [
		{ browserName: 'chrome' }
	],
	maxConcurrency: 3,
	useSauceConnect: true,
	webdriver: {
		host: 'localhost',
		port: 4444,
		username: 'jcheatham_intern',
		accessKey: '0839718a-e73e-4a4d-97c2-90baab0e8057'
	},
	useLoader: {
		'host-node': 'dojo/dojo',
		'host-browser': 'node_modules/dojo/dojo.js'
	},
	loader: {
		// Packages that should be registered with the loader in each testing environment
		packages: [ { name: 'app', location: '.' } ]
	},
	suites: [ 'app/tests/all' ],
	//functionalSuites: [ 'app/tests/all' ],
	excludeInstrumentation: /./
});
