const AppError = require('./error-handler');
const { StatusCodes } = require('http-status-codes');

class ValidationError extends AppError {

    constructor(error) {

        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });

        super(
            error.name,
            'Invalid credentials',
            explanation,
            StatusCodes.BAD_REQUEST
        )
    }
}

module.exports = ValidationError;