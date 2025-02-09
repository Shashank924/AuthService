const { User , Role } = require('../models/index');
const { ValidationError , NotFoundError } = require('../utils/index');

class UserRepository {

    async createUser(data) {

        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.name === 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async getUserById(userId) {

        try {
            const user = await User.findByPk(userId);

            if(!user) {
                throw new NotFoundError();
            }

            return user;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw error;
        }
    }

    async getUserByEmail(userEmail) {

        try {
            const user = await User.findOne({
                where : {
                    email : userEmail
                }
            });
            console.log(NotFoundError);
            if(!user) {
                throw new NotFoundError();
            }

            return user;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw error;
        }
    }

    async isAdmin(userId) {

        try {
            const user = await this.getUserById(userId);

            if(!user) {
                throw new NotFoundError();
            }

            const adminRole = await Role.findOne({
                where : {
                    name : 'ADMIN'
                }
            });

        const response = await user.hasRole(adminRole);
        return response;


        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository;