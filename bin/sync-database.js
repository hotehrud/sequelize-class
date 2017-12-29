import { sequelize } from '../app/models/'

export default () => {
  return sequelize.sync()
}