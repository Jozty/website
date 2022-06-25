import fetch from 'node-fetch'
import express from 'express'
import { globalData } from '../plugins/global-data'
const app = express()

app.use(express.json())
app.all('/', async (req, res) => {
  const version = req.body.version || globalData.latestVersion
  const response = await fetch(
    `https://github.com/Jozty/Fae/releases/download/${version}/declarations.d.ts`
  )
  const txtFile = await response.text()
  res.send(txtFile)
})

export default app
