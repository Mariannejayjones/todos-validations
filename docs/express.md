# Introdução ao Express

O Express é um pacote Node que permite desenvolver aplicações servidores de forma facilitada.

## Como instalar

`yarn add express`
`npm i express`

## Como usar

```js
const app = require('express')()

const PORT = 8000
const HOST = '0.0.0.0'

app.get('/hello', (req, res) => {
  res.send('Hello world!')
})

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`)
})
```
