class KnownError extends Error {
    constructor({message, error}) {
        super();
        this.message = message;
        this.error = String(error);
        this.statusCode = 500;
    }
}

module.exports = {
    KnownError,
};
