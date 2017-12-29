import { models } from '../../models/'

let User = models.User

export const search = (req, res) => {
  User.findAll().then(data => {
    return res.status(200).json(data)
  })
}

export const join = (req, res) => {
  const data = req.body
  let name = data.name
  let ps = data.ps

  User.create({
    userName: name,
    password: ps
  }).then(data => {
    return res.status(201).json(data)
  })
}

export const remove = (req, res) => {
  const data = req.params
  let name = data.id

  User.destroy({
    where: {
      userName: name
    }
  }).then(data => {
    return res.status(200).json(data)
  })
}