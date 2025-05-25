const express = require('express');
router = express.Router();

const {
    registerAdmin,
} = require('../controllers/adminAuth')

const {
    LoginHandler,
} = require('../controllers/loginAuth')

const {
    registerStudent,
} = require('../controllers/studentAuth')




router.post('/login',LoginHandler)

router.post('/register/student',registerStudent);



module.exports = router ;