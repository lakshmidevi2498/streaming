import express from 'express'
import { videoGetController, videoPostController } from '../controller.js/videoController.js';
const router = express.Router()

router.post('/',videoPostController)
router.get('/',videoGetController)
export default router;
