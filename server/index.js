'use strict';
const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

// Make sure to create a keyfile (if on Google Cloud Platform)
const config = {
	projectId: 'google-project-id',
	keyFilename: './google-project-id.json'
};

const someFunction = require('./functions/someFunction');

exports.someFunction = functions.https.onRequest((req, res) => {
	cors(req, res, function() {
		someFunction.handler(req, res);
	});
});
