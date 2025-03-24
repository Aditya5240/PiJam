// routes/geminiRoutes.js
import express from 'express';
import multer from 'multer';
import { geminiImageEvaluation } from '../controllers/geminiController.js';

const router = express.Router();
const upload = multer(); // In-memory storage

// POST /api/gemini/image
router.post('/image', upload.single('file'), geminiImageEvaluation);

export default router;
