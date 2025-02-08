const { User } = require('../models/index');

class UserRepository {

    async createUser(data) {

        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async getUserById(userId) {

        try {
            const user = await User.findByPk(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async getUserByEmail(userEmail) {

        try {
            const user = await User.findOne({
                where : {
                    email : userEmail
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }
}

module.exports = UserRepository;