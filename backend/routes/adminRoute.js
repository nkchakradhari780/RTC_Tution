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

if(process.env.NODE_ENV === 'development'){
    router.post('/register/admin',registerAdmin);
}

router.post('/student/register',registerStudent);

router.delete('/student/delete/:id',deleteStudent);

router.put('/student/update/:id',updateStudent);

router.patch('/student/partiallyUpdate/:id',partialUpdateStudent);

router.get('/student/list',listStudent);

router.get('/student/profile/:id',detailStudent);


module.exports = router;