const Note = require('../models/notes_model')
const generatePdfThumbnail = require('../utils/generatePdfThumbnail');

module.exports.generateThumbnail = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    if (!note.pdfBuffer) {
      return res.status(400).json({ message: 'PDF buffer missing in note' });
    }

    console.log("Generating thumbnail for:", note.title);

    const pdfBuffer = note.pdfBuffer;
    const title = note.title;

    // Generate the thumbnail and save it
    await generatePdfThumbnail(pdfBuffer, title);

    const safeTitle = title.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase();
    const thumbnailFilename = `${safeTitle}-1.png`;
    const thumbnailUrl = `http://localhost:3001/thumbnails/${thumbnailFilename}`;


    console.log("thumbnail url: ", thumbnailUrl);
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { thumbnail: thumbnailUrl },
      { new: true, runValidators: true }
    );

    console.log("Thumbnail updated for note:", updatedNote.title);

    return res.status(200).json({
      message: 'Thumbnail generated successfully',
      thumbnail: thumbnailUrl,
    });
  } catch (err) {
    console.error("Thumbnail generation failed:", err);
    console.log("error");
    return res.status(500).json({ message: 'Error generating thumbnail' });
  }
};
