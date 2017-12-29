import database from './database.config'
import server from './server.config'

class Config {

  constructor() {
    this._databaseConfig = database
    this._serverConfig = server
  }

  get databaseConfig () {
    return this._databaseConfig
  }

  get serverConfig () {
    return this._serverConfig
  }

}

const config = new Config()
export const databaseConfig = config._databaseConfig
export const serverConfig = config._serverConfig
