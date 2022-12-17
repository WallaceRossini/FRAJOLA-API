import express from 'express'
import config from './config'
import { router } from './router'
import path from 'node:path'

const app = express()
const { PORT } = config

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*') //* = WILDCARD('carta coringa')
  res.setHeader('Access-Control-Allow-Headers', '*')

  next()
})

app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')))

app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`)
})
