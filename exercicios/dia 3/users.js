const express = require('express')
const bodyParser = require('body-parser')

// hello // 
const { validate, validations } = require('indicative/validator')
const { response } = require('express')
const { sanitize } = require('indicative/sanitizer')

const PORT = 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, res) =>{
  const data = req.body

  const rules = {
    name: 'required',
    email: 'requiredIf:active|email', // enforces the value to exist - -requiredIf - exampla: address needed when "delivery" exists
    username: 'required|alphaNumeric',
    active: 'boolean',
    phone: [
      'required',
      validations.regex ([new RegExp('')]) //check online guides - indicatives for regex 
    ],
  }

  const sanitizationRules = { // help clean any issues or anomalies
    name: 'trim|escape',// clears white spaces
    username: 'lowerCase' //only allows lowercase - or changes to lowercase
  }

  validate(data, rules, sanitizationRules)
  .then((value) => {
    sanitize(value, sanitizationRules)
      res.send(value)
  }).catch((error) =>{
    res.status(400).send(error)
  })
})