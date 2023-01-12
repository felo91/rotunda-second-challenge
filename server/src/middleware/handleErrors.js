const { KnownError } = require('../controller/responses/errors');

const handleErrors = (err, req, res, next) => {
    console.error(err.stack);
    if (err instanceof KnownError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
            ok: false,
            error: err.error,
        });
    }

    return res.status(500).json({
        status: 'error',
        message: err.message,
        ok: false,
        error: err.error,
    });
}

module.exports = {handleErrors}