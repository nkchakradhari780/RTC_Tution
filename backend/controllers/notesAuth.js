const Note = require("../models/notes_model");

module.exports.uploadNote = async (req, res) => {
  console.log("Req.file:", req.file.buffer);
  try {
    const {
      description,
      thumbnail,
      instructor,
      isPremium,
      previewAvailable,
      downloadUrl,
      courseId,
      title,
      subject,
      course,
      uploadedAt,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "PDF file is required." });
    }

    const note = new Note({
      description,
      thumbnail,
      instructor,
      isPremium,
      previewAvailable,
      downloadUrl,
      courseId,
      title,
      subject,
      course,
      uploadedAt,
      pdfBuffer: req.file.buffer,
    });

    await note.save();

    res.status(200).json({ message: "PDF uploaded successfully", note });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

module.exports.readNotesList = async (req, res) => {
  try {
    const notes = await Note.find()
      .populate() // populate course name if course is a ref
      .select("-pdf.data"); // exclude heavy PDF buffer from this list response

    res.status(200).json({
      success: true,
      notes,
    });
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch notes",
      error: error.message,
    });
  }
};

module.exports.previewNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    // console.log(note.pdfBuffer);

    if (!note) return res.status(404).send("Not found");

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="note.pdfBuffer"',
    });
    res.send(note.pdfBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error while fetching PDF");
  }
};

module.exports.readNotesList1 = async (req, res) => {
  try {
    const notes = await Note.find()
      .populate() // populate course name if course is a ref
      .select("-pdf.data"); // exclude heavy PDF buffer from this list response

    res.status(200).render("pdt-list", {
      success: true,
      notes,
    });
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch notes",
      error: error.message,
    });
  }
};


