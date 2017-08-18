function errorHandler(err, req, res, next) {
    if (err.status === 404) res.render('not_found');
    else res.status(500).send(err.message === '' ? {} : {errors: err.message});
}

module.exports = errorHandler;