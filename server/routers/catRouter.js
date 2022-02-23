import express from 'express'
const router = express.Router()
import { getAllCats } from '../controllers/catController.js'

router.route('/').get(getAllCats)

export default router
