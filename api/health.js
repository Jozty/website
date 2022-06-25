import express from 'express'

const app = express()
app.use(express.json())

app.all('/', (req, res) => {
  res.send('OK')
})

export default app
