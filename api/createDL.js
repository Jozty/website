const fetch = require('node-fetch')
const { writeResponse, parseBody } = require('./utilities')

async function createLink(reqBody, req, res) {
  try {
    const body = {
      dynamicLinkInfo: {
        domainUriPrefix: 'https://dyl.jozty.io',
        link: reqBody.shareUrl,
      },
      suffix: {
        option: 'UNGUESSABLE',
      },
    }
    console.log(process.env.FIREBASE_API_KEY)
    const key = process.env.FIREBASE_API_KEY
    const response = await fetch(
      `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${key}`,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      }
    )
    const data = await response.json()
    console.log(data)
    writeResponse(200, res, data.shortLink)
  } catch (error) {
    console.error('error')
    console.error(error)
    writeResponse(400, res, error.message || error, true)
  }
}

export default function (req, res, next) {
  parseBody(req, res, createLink)
}
