const authRequestValidator = async (req , res , next) => {

    if(
        !req.body.email ||
        !req.body.password
    ) {
        return res.status(400).json({
            data : {},
            success : false,
            message : "Invalid request",
            err : "Email or Password Missing"
        })
    }

    next();
}

module.exports = {
    authRequestValidator,
}