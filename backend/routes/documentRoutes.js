// // import express from 'express';
// // import multer from 'multer';
// // import path from 'path';
// // import fs from 'fs';
// // import { fileURLToPath } from 'url';
// // import Document from '../models/Document.js'; // Create this model

// // const router = express.Router();

// // // File path helpers
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // // Set up storage for Multer
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     const uploadDir = path.join(__dirname, '../uploads');
// //     if (!fs.existsSync(uploadDir)) {
// //       fs.mkdirSync(uploadDir);
// //     }
// //     cb(null, uploadDir);
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, `${Date.now()}-${file.originalname}`);
// //   }
// // });

// // const upload = multer({ storage });

// // // @route   POST /api/documents/upload
// // // @desc    Upload a document
// // // @access  Public (You can add auth if needed)
// // router.post('/upload', upload.single('file'), async (req, res) => {
// //   try {
// //     const newDoc = new Document({
// //       filename: req.file.filename,
// //       originalname: req.file.originalname,
// //       path: `/uploads/${req.file.filename}`,
// //       uploadedAt: new Date()
// //     });

// //     await newDoc.save();

// //     res.status(201).json({ message: 'Document uploaded', document: newDoc });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: 'Server Error' });
// //   }
// // });

// // // @route   GET /api/documents
// // // @desc    Get all uploaded documents
// // router.get('/', async (req, res) => {
// //   try {
// //     const docs = await Document.find().sort({ uploadedAt: -1 });
// //     res.json(docs);
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: 'Server Error' });
// //   }
// // });

// // export default router;
// // routes/documentRoutes.js
// import express from 'express';
// import multer from 'multer';
// import Document from '../models/Document.js';
// import path from 'path';

// const router = express.Router();

// // Multer storage set pannudhaan file save agum
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');  // Files save pannum location
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // File name unique aganum
//   }
// });

// const upload = multer({ storage });

// // POST route - file upload
// router.post('/', upload.single('document'), async (req, res) => {
//   try {
//     // Document data MongoDB-le save pannudhaan
//     const document = new Document({
//       filename: req.file.originalname,
//       filePath: `/uploads/${req.file.filename}`
//     });

//     await document.save();
//     res.status(201).json({ message: 'Document uploaded successfully', document });
//   } catch (error) {
//     res.status(500).json({ message: 'Error uploading document', error });
//   }
// });

// export default router;
// // //
// // import express from 'express';
// // import multer from 'multer';
// // import Document from '../models/Document.js'; // Assuming you have a Document model

// // const router = express.Router();

// // // Set up multer for file upload
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, 'uploads/'); // Store files in 'uploads' folder
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, Date.now() + '-' + file.originalname); // Name the file with timestamp and original name
// //   },
// // });

// // const upload = multer({ storage: storage });

// // // Document upload route
// // router.post('/upload', upload.single('file'), async (req, res) => {
// //   try {
// //     if (!req.file) {
// //       return res.status(400).json({ message: 'No file uploaded' });
// //     }

// //     // Create a new document record in the database
// //     const newDocument = new Document({
// //       filename: req.file.filename,
// //       path: req.file.path,
// //       fileUrl: `/uploads/${req.file.filename}`, // URL to access the file
// //     });

// //     await newDocument.save();
// //     res.status(200).json({
// //       message: 'File uploaded successfully',
// //       document: newDocument,
// //     });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // export default router;
// import express from 'express';
// import multer from 'multer';
// import Document from '../models/Document.js';
// import path from 'path';
// import fs from 'fs';

// const router = express.Router();

// // Create 'uploads' folder if not exists
// const uploadDir = path.join(process.cwd(), 'uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // Set up Multer storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir); // Save to 'uploads/' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
//   }
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, // Max file size: 10MB
// });

// // POST /api/documents - Handle file upload
// router.post('/', upload.single('document'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     // Save document metadata in MongoDB
//     const document = new Document({
//       filename: req.file.originalname,
//       filePath: `/uploads/${req.file.filename}`,
//     });

//     await document.save();

//     res.status(201).json({ message: 'Document uploaded successfully', document });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ message: 'Error uploading document', error: error.message });
//   }
// });

// export default router;
// routes/documentRoutes.js
import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import Document from '../models/Document.js';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Upload a file
router.post('/', upload.single('file'), async (req, res) => {
  const { file } = req;
  const newDoc = new Document({
    name: file.originalname,
    size: (file.size / 1024).toFixed(2) + ' KB',
    type: file.mimetype,
    url: `${process.env.BASE_URL || 'http://localhost:5000'}/uploads/${file.filename}`,
    uploadedOn: new Date().toLocaleString(),
  });
  await newDoc.save();
  res.status(201).json(newDoc);
});

// Get all documents
router.get('/', async (req, res) => {
  const docs = await Document.find().sort({ _id: -1 });
  res.json(docs);
});

// Delete document
router.delete('/:id', async (req, res) => {
  const doc = await Document.findById(req.params.id);
  if (!doc) return res.status(404).send('Not found');

  const filePath = path.join(__dirname, '..', 'uploads', doc.url.split('/uploads/')[1]);
  fs.unlinkSync(filePath);
  await doc.deleteOne();
  res.sendStatus(204);
});

export default router;
