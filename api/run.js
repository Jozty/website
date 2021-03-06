const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')
const { v4 } = require('uuid')

const { removeImports, replaceFaeImport } = require('../utilities/noDep')
const { writeResponse, parseBody } = require('./utilities')

function runDeno(data, req, res) {
  const file = path.join(__dirname, 'tmp', v4() + '.ts')
  let code = removeImports(data.code)
  code = replaceFaeImport(code, data.version)

  fs.writeFileSync(file, code)

  const command = `deno run ${file.toString()}`
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(error)
      writeResponse(400, res, error.message || error, true)
    } else if (stderr && !stdout) {
      console.error(stderr)
      writeResponse(400, res, stderr, true)
    } else {
      writeResponse(200, res, stdout, true)
    }
    fs.unlinkSync(file)
  })
}

export default function (req, res, next) {
  parseBody(req, res, runDeno)
}
