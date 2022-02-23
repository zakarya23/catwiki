import express from 'express'
const router = express.Router()
import {
	getAllCats,
	getDetails,
	getImages,
} from '../controllers/catController.js'

router.route('/').get(getAllCats)
router.route('/:keyword').get(getDetails)
router.route('/images/:id').get(getImages)

export default router
