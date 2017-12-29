'use strict'

import { models } from '../../models/'

let Post = models.Post

export const search = (req, res) => {
  Post.findAll().then(data => {
    return res.status(200).json(data)
  })
}

export const create = (req, res) => {
  const data = req.body
  let title = data.title
  let textarea = data.textarea
  let author = data.author
  let userid = data.userid
  
  Post.create({
    title: title,
    textarea: textarea,
    author: author,
    UserId: userid
  }).then(data => {
    return res.status(201).json(data)
  })
}

export const remove = (req, res) => {
  const data = req.params
  let id = data.id

  Post.destroy({
    where: {
      id: id
    }
  }).then(data => {
    return res.status(200).json(data)
  })
}