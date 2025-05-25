const express = require('express');
const router = express();
const upload = require('../config/multer-config');
const {
    uploadNote,
    readNotesList,
    readNotesList1,
    previewNote,

} = require('../controllers/notesAuth');

const { generateThumbnail } = require("../controllers/thumbnailController");


router.post('/upload',upload.single('note'),uploadNote)

router.get('/check/fileupload',(req,res) =>{
    res.render('pdf-notes')
})

router.get('/check/notelist',readNotesList)

router.get('/check/notelist1',readNotesList1)

router.get('/preview/notes/:id',previewNote)

router.post('/:id/thumbnail', generateThumbnail);

module.exports = router;