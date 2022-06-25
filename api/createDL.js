import fetch from 'node-fetch'
import express from 'express'
const app = express()

app.use(express.json())
app.all('/', async (req, res) => {
  try {
    const body = {
      dynamicLinkInfo: {
        domainUriPrefix: 'https://dyl.jozty.io',
        link: req.body.shareUrl,
      },
      suffix: {
        option: 'UNGUESSABLE',
      },
    }
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

    if (response.statusCode === 200) {
      res.send(data.shortLink)
    } else {
      res.status(400)
      res.send(data)
    }
  } catch (error) {
    res.statusCode(400)
    res.send(error.message || error)
  }
})

export default app
