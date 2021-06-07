const express = require('express')
const bodyParser = require('body-parser')

const users = require('./users')
const todos = require('./todos')

const PORT = 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

users(app)
todos(app)

app.get('/welcome', (req, res) => {
  const { name } = req.query

  res.send(`Welcome ${name} :)`)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
