'use strict';
const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

// Make sure to create a keyfile (if on Google Cloud Platform)
const config = {
	projectId: 'pay-to-win-be',
	keyFilename: './pay-to-win-be.json'
};

const payment = require('./functions/payment');

exports.payment = functions.https.onRequest((req, res) => {
	cors(req, res, function() {
		payment.handler(req, res);
	});
});
