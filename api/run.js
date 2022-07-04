import fs from 'fs'
import tmp from 'tmp'

import express from 'express'
import { execCommand } from '../utilities/exec'
import { globalData } from '../plugins/global-data'

import { removeImports, addFaeDenoUrlImport } from '../utilities/noDep'
import { covertToHtml } from './utilities'

const app = express()

app.use(express.json())

app.all('/', async (req, res) => {
  let { code, version } = req.body

  version = version || globalData.latestVersion

  code = removeImports(code)
  code = addFaeDenoUrlImport(code, version)

  const tmpFile = tmp.fileSync({ postfix: '.ts' })
  const filePath = tmpFile.name

  fs.writeFileSync(filePath, code)

  const command = `deno run --check=all ${filePath.toString()}`

  try {
    let { stdout, stderr } = await execCommand(command)
    stdout = (stdout || '').trim()
    stderr = (stderr || '').trim()

    stderr = stderr
      .split('\n')
      .filter((a) => !!a)
      .filter((l) => !l.includes('\u001B'))
      .join('\n')

    let output = ''

    if (stderr) output += covertToHtml(stderr + '\n')
    if (stdout) output += covertToHtml(stdout + '\n')

    res.write(output)
    res.end()
  } catch (e) {
    res.status(400)
    res.send(covertToHtml(e.message || e))
  } finally {
    tmpFile.removeCallback()
  }
})

export default app
