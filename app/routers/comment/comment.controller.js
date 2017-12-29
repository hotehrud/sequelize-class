import { models } from '../../models/'

let Comment = models.Comment

export const search = (req, res) => {
  Comment.findAll().then(data => {
    return res.status(200).json(data)
  })
}

export const create = (req, res) => {
  const data = req.body
  let title = data.title
  let textarea = data.textarea
  let userid = data.userid
  let postid = data.postid

  Comment.create({
    title: title,
    textarea: textarea,
    UserId: userid,
    PostId: postid
  }).then(data => {
    return res.status(201).json(data)
  })
}

export const remove = (req, res) => {
  const data = req.params
  let id = data.id

  Comment.destroy({
    where: {
      id: id
    }
  }).then(data => {
    return res.status(200).json(data)
  })
}