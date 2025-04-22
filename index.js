const express = require('express')
const app = express()
const port = 9720

console.log("Backend starting...")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

