const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminModel = require('../models/admin_model');

module.exports.registerAdmin = async (req,res) => {
    try{
        let {fullName, email,password} = req.body;

        let admin = await adminModel.findOne({email});
        if (admin) return res.status(401).send("Admin Alredy Exists");

        bcrypt.genSalt(10, (err, salt) =>{
            bcrypt.hash(password,salt, async (err, hash) => {
                if (err) return res.send(err.message);
                else {
                    let admin = await adminModel.create({
                        fullName,
                        email,
                        password: hash
                    });

                    console.log(admin);
                    res.send("Admin Created");
                }
            });
        });
    } 
    catch (err) {
        console.log(err.message);
        res.send("Something went wrong");
    }
};
