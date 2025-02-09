const AppError = require('./error-handler');
const { StatusCodes } = require('http-status-codes');

class NotFoundError extends AppError {

    constructor() {

        super(
            'NOT_FOUND',
            'User does not exist',
            'No record of user in database of such credentials',
            StatusCodes.NOT_FOUND
        )
    }
}

module.exports = NotFoundError;