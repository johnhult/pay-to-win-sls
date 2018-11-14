const functions = require('firebase-functions');
const stripe = require("stripe")(functions.config().stripe.token);
// const stripe = require("stripe")(functions.config().stripe.live);

exports.handler = async function(req, res) {
	const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
	const token = body.token.id;
	const amount = body.charge.amount;
	const email = body.token.email;
	const currency = body.charge.currency;

	const chargeRes = await stripe.charges.create({
		amount,
		currency,
		description: "Pay to Win payment",
		source: token,
		receipt_email: email
	}).catch(error => {
		console.log("err", error);
		res.status(500).end();
	});

	console.log("woho", chargeRes);

	// You may or may not need these
	res.status(200);
	res.header('Access-Control-Allow-Origin', '*');
	res.send({
		body: JSON.stringify(chargeRes)
	});
};
