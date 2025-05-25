const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const adminModel = require('../models/admin_model')
const studentModel = require('../models/student_model')

module.exports.LoginHandler = async (req,res)=>{
    try{
        let {email,password,role} = req.body;
        console.log(req.body);
        let user 

        switch(role){
            case 'admin':
                user = await adminModel.findOne({email});
                break;
            case 'student':
                user = await studentModel.findOne({email});
                break;
            default:
                return res.status(400).json({sucess: false, message: 'Invalid Role'});
        }

        if(!user) return res.status(404).json({sucess: false, message: 'Email or Password is Incorrect'});
        
        bcrypt.compare(password, user.password, (err, result) => {
            console.log(password, user.password);
            if (err) return res.status(500).send("Error occured while comparing password");
            
            if(result) {
                const token = jwt.sign({
                    userId: user._id, 
                    role: role, 
                    email: email
                },
                    process.env.JWT_KEY
                );
                res.cookie("token",token,{
                    httpONly: true,
                    secrure: false,
                    maxAge: 3600000,
                });
                res
                    .status(200)
                    .json({
                        sucess: true,
                        message: "LoggedIn Sucessfully",
                        user,
                        token,
                    });
            } else {
                return res.status(401).send("Email or password is incorrect");
            }
        })
    } 
    catch (err) {
        console.error("Error: ", err.message);
        res.status(500).send("Server Error");
    }
};