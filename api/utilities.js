const Convert = require('ansi-to-html')

const convert = new Convert({
  newline: true,
})

export function parseBody(req, res, callback) {
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
      callback(body, req, res)
    })
}

export function writeResponse(code, res, data, covertToHtml = false) {
  res.statusCode = code
  if (typeof data !== 'string') data = JSON.stringify(data)
  const out = covertToHtml ? convert.toHtml(data) : data
  res.write(out)
  res.end()
}
