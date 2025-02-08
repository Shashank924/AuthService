const UserRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');
const { Role } = require('../models/index');

class UserService {

    constructor() {
        this.userRepositoryObj = new UserRepository();
    }

    async createUser(data) {

        try {
            const user = await this.userRepositoryObj.createUser(data);
            return user;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async signIn(email , plainPassword) {

        try {
            const user = await this.userRepositoryObj.getUserByEmail(email);
            const passwordMatch = this.checkPassword(plainPassword , user.password);

            if(!passwordMatch) {
                throw {error : 'Incorrect Password'};
            }

            const token = this.createToken({email : user.email , id : user.id});
            return token;

        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async isAuthenticated(token) {

        try {
            const response = this.verifyToken(token);
            const user = await this.userRepositoryObj.getUserByEmail(response.email);

            if(!user) {
                throw {error : 'User no longer exist'};
            }

            return response.id;

        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    createToken(user) {
        
        try {
            const token = jwt.sign( user , JWT_KEY , {expiresIn : '1h'});
            return token;
        } catch (error) {
            console.log("Not able to create token");
            throw {error};
        }
    }

    verifyToken(token) {

        try {
            const response = jwt.verify(token , JWT_KEY);
            return response;
        } catch (error) {
            console.log("Not able to verify token");
            throw {error};
        }
    }

    checkPassword(plainPassword , encryptedPassword) {
        const response = bcrypt.compareSync(plainPassword , encryptedPassword);
        return response;
    }

    async isAdmin(userId) {

        try {
            return this.userRepositoryObj.isAdmin(userId);
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }
}

module.exports = UserService;