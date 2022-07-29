const express = require('express')
const app = express()
const port = 3000

const listOfShips = require('./ship-list.json')


app.get('/', (req, res) => {
  res.send(listOfShips)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})