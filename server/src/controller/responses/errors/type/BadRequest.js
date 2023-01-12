const {KnownError} = require ('./KnownError')

module.exports = class BadRequest extends KnownError { 
    constructor(message){
        super({message})
        this.message = message || 'Something went wrong';
        this.statusCode = 400;
        this.error = 'Error Bad Request';
    }
}