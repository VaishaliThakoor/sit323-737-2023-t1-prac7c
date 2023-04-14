const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.send('OK')
})

const port = 3000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})