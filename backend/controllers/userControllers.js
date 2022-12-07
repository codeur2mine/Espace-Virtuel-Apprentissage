const asyncHandler = require('express-async-handler');
const Register = require("../models/registerModel");
const generateToken = require('../utils/generateToken');


const registerUser = asyncHandler(async (req, res) => {
    const { lastName, firstName, date, email, username, phone, password, pic } = req.body;

    const userExist = await Register.findOne({ email });

    if (userExist) {
        res.status(400)
        throw new Error("Ce nom d'utilisateur existe déjà");
    }

    const register = await Register.create({ lastName, firstName, date, email, username, phone, password, pic });

    if (register) {
        res.status(201).json({
            _id: register._id,
            lastName: register.lastName,
            firstName: register.firstName,
            date: register.date,
            email: register.email,
            username: register.username,
            phone: register.phone,  
            isAdmin: register.isAdmin,
            pic: register.pic,
            token: generateToken(register._id)
        })
    } else {
        res.status(400)
        throw new Error("Erreur Survenue !");

    }

});

module.exports = { registerUser };