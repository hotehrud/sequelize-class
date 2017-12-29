import express from 'express'
import * as controller from './post.controller'

let router = express.Router()

router.get('/', controller.search)
router.post('/', controller.create)
router.delete('/:id', controller.remove)

export default router