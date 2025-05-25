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

const {
    isAdmin
} = require('../middlewares/isAdmin')



// console.log("IndexRoute:");

router.post('/login',LoginHandler)

router.post('/register/student',registerStudent);



module.exports = router ;