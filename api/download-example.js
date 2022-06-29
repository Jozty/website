import path from 'path'
import { createWriteStream, mkdirSync, readFileSync } from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'
import fetch from 'node-fetch'
import express from 'express'

import { globalData } from '../plugins/global-data'
import {
  addFaePlaygroundImport,
  getEncodedCodeString,
  getPlaygroundLink,
  removeImports,
} from '../utilities/noDep'
const app = express()

const streamPipeline = promisify(pipeline)

app.use(express.json())
app.all('/', async (req, res) => {
  const { functionName } = req.query
  let { version } = req.query

  if (!functionName) {
    return res.sendStatus(400)
  }

  version = version || globalData.latestVersion
  const directory = path.join('api', 'tmp', version)
  const destFilePath = path.join(directory, functionName + '.ts')

  let fileData

  try {
    mkdirSync(directory, { recursive: true })
    fileData = readFileSync(destFilePath, { encoding: 'utf-8' })
  } catch (e) {
    const functionUrl = `https://raw.githubusercontent.com/Jozty/Fae/${version}/examples/${functionName}.ts`

    mkdirSync(path.join('api', 'tmp'), { recursive: true })
    const response = await fetch(functionUrl)

    if (response.status === 404) {
      return res.sendStatus(404)
    } else if (!response.ok) {
      return res.sendStatus(400)
    }

    await streamPipeline(response.body, createWriteStream(destFilePath))
    fileData = readFileSync(destFilePath, { encoding: 'utf-8' })
  }

  fileData = removeImports(fileData)
  fileData = addFaePlaygroundImport(fileData, version)

  res.send(getPlaygroundLink(getEncodedCodeString(fileData), version))
})

export default app
