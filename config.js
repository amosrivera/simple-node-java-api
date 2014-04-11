// simple logger
exports.logger = function(req, res, next){
	console.log('%s %s', req.method, req.url);
	next();
};


