import express from 'express'
import cors from 'cors'
import Router from './Routers/index.js'
import './mongo.js'
  const app = express()
  // init middleware
  app.use(cors())
  //read from client
  app.use(
    express.urlencoded({
      extended: true
    })
  )
  app.use(express.json())
  // define routes
  app.use('/api',Router)
  // define server
  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})