const express = require('express');
router = express.Router();

const {
    addCourse,
    updateCourse,
    deleteCourse,
    courseList,
    partialUpdateCourse,
} = require('../controllers/coursesAuth');

router.post('/add',addCourse);

router.put('/update/:id',updateCourse);

router.delete('/delete/:id',deleteCourse);

router.get('/list',courseList);

router.patch('/partiallyUpdate/:id',partialUpdateCourse);


module.exports = router;    