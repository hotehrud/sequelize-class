import app from '../app/server'
import syncDatabase from './sync-database'
import { serverConfig } from '../config/'

app.listen(serverConfig.port, (err) => {
  if (err) {
    return console.log(err)
  }

  syncDatabase().then((res) => {
    console.log("Database sync")
  })

  return console.log(`server is listening on ${serverConfig.port}`)
})