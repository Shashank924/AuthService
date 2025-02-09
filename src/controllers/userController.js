const UserService = require('../services/userService');

const userServiceObj = new UserService();

const create = async (req , res) => {

    try {
        const user = await userServiceObj.createUser(req.body);
        return res.status(201).json({
            data : user,
            success : true,
            message : "Succesfully create a user",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            success : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const signIn = async (req , res) => {

    try {
        const response = await userServiceObj.signIn(req.body.email , req.body.password);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Succesfully able to SignIn",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data : {},
            success : false,
            message : "Not able to signIn",
            err : error.explanation
        });
    }
}

const isAuthenticated = async (req , res) => {

    try {
        const response = await userServiceObj.isAuthenticated(req.headers['x-access-token']);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Token verfication Successful",
            err : {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data : {},
            success : false,
            message : "Invalid Token",
            err : error
        });
    }
}

const isAdmin = async (req , res) => {

    try {
        const response = await userServiceObj.isAdmin(req.body.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Admin verification successful",
            err : {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data : {},
            success : false,
            message : "Something went wrong",
            err : error
        });
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin
}