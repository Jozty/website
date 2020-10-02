const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')
const { v4 } = require('uuid')
const Convert = require('ansi-to-html')

const convert = new Convert({
  newline: true,
})

function writeResponse(code, res, data) {
  res.statusCode = code
  if (typeof data !== 'string') data = JSON.stringify(data)
  const out = convert.toHtml(data)
  res.write(out)
  res.end()
}

function setHandlersOnReq(req, res) {
  let body = []
  req
    .on('error', (e) => {
      writeResponse(400, res, e)
    })
    .on('data', (chunk) => {
      body.push(chunk)
    })
    .on('end', () => {
      body = Buffer.concat(body).toString()
      body = JSON.parse(body)
      runDeno(body, req, res)
    })
}

function runDeno(data, req, res) {
  const file = path.join(__dirname, 'tmp', v4() + '.ts')
  const code = data.code
  let imp
  if (!data.version) {
    imp = `import * as Fae from 'https://deno.land/x/fae/mod.ts'`
  } else {
    imp = `import * as Fae from 'https://deno.land/x/fae@${data.version}/mod.ts'`
  }

  fs.writeFileSync(file, imp + '\n' + code)

  const command = `deno run ${file.toString()}`
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('error')
      console.error(error)
      writeResponse(400, res, error.message || error)
    } else if (stderr && !stdout) {
      console.error('stderr')
      console.error(stderr)
      writeResponse(400, res, stderr)
    } else {
      writeResponse(200, res, stdout)
    }
    fs.unlinkSync(file)
  })
}

export default function (req, res, next) {
  console.log('here')
  setHandlersOnReq(req, res)
}
