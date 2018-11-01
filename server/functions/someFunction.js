exports.handler = function(req, res) {
	const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

	const response = '';

	// You may or may not need these
	// res.header('Access-Control-Allow-Origin', '*');
	// res.status(200);
	res.send({
		body: JSON.stringify(response)
	});
};
