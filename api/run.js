const { exec } = require('child_process')
const Convert = require('ansi-to-html')

const convert = new Convert();



function writeResponse(code, res, data) {
  res.statusCode = code
  res.write(JSON.stringify(data))
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
  const code = data.code
  const command = `echo "${code}" | deno run -`
  exec(command, (error, stdout, stderr) => {
    if (error) {
      writeResponse(400, res, error.message)
      return
    }
    if (stderr) {
      writeResponse(400, res, stderr)
      return
    }
    const out = convert.toHtml(stdout)
    writeResponse(200, res, out)
  })
}

export default function (req, res, next) {
  setHandlersOnReq(req, res)
}
