const fs = require('fs');
const path = require('path');
const poppler = require('pdf-poppler');
const os = require('os');

/**
 * Generate a thumbnail image (PNG) from the first page of a PDF buffer
 * @param {Buffer} pdfBuffer - PDF content
 * @param {string} title - Title of the note (used as filename)
 * @returns {Promise<Buffer>} - Buffer of PNG image
 */

async function generatePdfThumbnail(pdfBuffer, title) {
  const timestamp = Date.now();

  // Sanitize title to make it a safe filename
  const safeTitle = title.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase();

  const thumbnailsDir = path.join(__dirname, '..', 'public', 'thumbnails');
  const inputPdfPath = path.join(os.tmpdir(), `note-${timestamp}.pdf`);
  const thumbPrefix = safeTitle; // Use title as prefix
  const outputThumbPath = path.join(thumbnailsDir, `${thumbPrefix}-1.png`);

  console.log("thumbnailsDir:",thumbnailsDir);
  console.log('thumbnailprefix:',thumbPrefix);

  // Ensure output directory exists
  if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir, { recursive: true });
  }

  // Save PDF buffer temporarily
  fs.writeFileSync(inputPdfPath, pdfBuffer);
  console.log(`PDF saved to: ${inputPdfPath}`);

  const opts = {
    format: 'png',
    out_dir: thumbnailsDir,
    out_prefix: thumbPrefix,
    page: 1,
    scale: 1024,
  };

  try {
    console.log(`Starting PDF conversion for: ${inputPdfPath}`);
    await poppler.convert(inputPdfPath, opts);

    console.log(`Generated thumbnail at: ${outputThumbPath}`);


    if (!fs.existsSync(outputThumbPath)) {
      throw new Error(`Thumbnail file not found: ${outputThumbPath}`);
    }

    const imageBuffer = fs.readFileSync(outputThumbPath);

    // Clean up PDF (keep the thumbnail)
    fs.unlinkSync(inputPdfPath);

    return imageBuffer;
  } catch (err) {
    console.error("Error during PDF conversion:", err);
    throw new Error('Error generating thumbnail');
  }
}

module.exports = generatePdfThumbnail;
