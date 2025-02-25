import express from 'express'
import { contentPostController ,contentGetController } from '../controller.js/contentController.js'
const router = express.Router()

router.post('/',contentPostController)
router.get('/',contentGetController)
export default router;
