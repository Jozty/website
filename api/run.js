import path from 'path'
import fs from 'fs'
import { v4 } from 'uuid'

import express from 'express'
import { execCommand } from '../utilities/exec'
import { globalData } from '../plugins/global-data'

import { removeImports, addFaeDenoUrlImport } from '../utilities/noDep'
import { covertToHtml } from './utilities'

const app = express()

app.use(express.json())

app.all('/', async (req, res) => {
  const filePath = path.join(__dirname, 'tmp', v4() + '.ts')
  let { code, version } = req.body

  version = version || globalData.latestVersion

  code = removeImports(code)
  code = addFaeDenoUrlImport(code, version)

  fs.writeFileSync(filePath, code)

  const command = `deno run --check=all ${filePath.toString()}`

  try {
    const stdout = await execCommand(command)
    res.write(covertToHtml(stdout))
    res.end()
  } catch (e) {
    res.status(400)
    res.send(covertToHtml(e.message || e))
  } finally {
    fs.unlinkSync(filePath)
  }
})

export default app
