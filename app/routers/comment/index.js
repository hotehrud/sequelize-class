import express from 'express'
import * as controller from './comment.controller'

let router = express.Router()

router.get('/', controller.search)
router.post('/', controller.create)
router.delete('/:id', controller.remove)

export default router