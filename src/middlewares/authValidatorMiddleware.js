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

const isAdminRequestValidator = async (req , res , next) => {

    if(
        !req.body.id
    ){
        return res.status(400).json({
            data : {},
            success : false,
            err : 'Something went wrong',
            message : 'Not provided user Id',
        });
    }
    next();
}

module.exports = {
    authRequestValidator,
    isAdminRequestValidator
}