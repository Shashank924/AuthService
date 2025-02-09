class AppError extends Error {

    constructor(errorName , message , explanation , statusCode) {
        super();
        this.errorName = errorName;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;