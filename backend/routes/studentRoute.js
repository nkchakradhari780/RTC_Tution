const express = require('express');
router = express();

const {
    registerAdmin,
} = require('../controllers/adminAuth');

const {
    registerStudent,
    deleteStudent,
    updateStudent,
    partialUpdateStudent,
    listStudent,
    detailStudent,
} = require('../controllers/studentAuth')

const isAdmin = require('../middlewares/isAdmin')


if(process.env.NODE_ENV === 'development'){
    router.post('/register/admin',registerAdmin);
}

router.post('/register',registerStudent);

router.delete('/delete/:id',isAdmin,deleteStudent);

router.put('/update/:id',isAdmin,updateStudent);

router.patch('/partiallyUpdate/:id',isAdmin,partialUpdateStudent);

router.get('/list',listStudent);

router.get('/profile/:id',detailStudent);


module.exports = router;