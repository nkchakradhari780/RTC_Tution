const express = require('express');
const router = express.Router(); // ✅ Fix here
const upload = require('../config/multer-config');
const {
    uploadNote,
    readNotesList,
    readNotesList1,
    previewNote,
} = require('../controllers/notesAuth');

const isAdmin = require('../middlewares/isAdmin'); // ✅ Import correctly if it's a single function

const { generateThumbnail } = require("../controllers/thumbnailController");

router.post('/upload', upload.single('note'), isAdmin, uploadNote);

router.get('/check/fileupload', (req, res) => {
    res.render('pdf-notes');
});

router.get('/check/notelist', readNotesList);

router.get('/preview/notes/:id', previewNote);

router.post('/:id/thumbnail', generateThumbnail);

router.post('/check', (req, res) => {
    console.log("check ");
    res.send("Checked");
});

module.exports = router;
