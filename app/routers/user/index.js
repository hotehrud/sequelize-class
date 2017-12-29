import express from 'express'
import * as controller from './user.controller'

let router = express.Router()

router.get('/', controller.search)
router.post('/', controller.join)
router.delete('/:id', controller.remove)

export default router