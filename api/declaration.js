const fetch = require('node-fetch')
const { writeResponse, parseBody } = require('./utilities')

async function fetchDeclaration(reqBody, req, res) {
  const version = reqBody.version
  const response = await fetch(
    `https://github.com/Jozty/Fae/releases/download/${version}/${version}.d.ts`
  )
  const txtFile = await response.text()
  writeResponse(200, res, txtFile)
}

export default function (req, res, next) {
  parseBody(req, res, fetchDeclaration)
}
