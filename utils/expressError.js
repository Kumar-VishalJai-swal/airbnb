class expressError extends Error {
    constructor(statusCode, massage){
        super();
        this.statusCode = statusCode;
        this.massage = massage;
    }
}

module.exports = expressError;