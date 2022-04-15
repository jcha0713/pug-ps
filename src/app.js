'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3001
app.set('view engine', 'pug')
app.set('views', './src/view/')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/name-card-2020', (req, res) => {
  res.render('name-card-2020')
})

app.get('/asterisk-emitter', (req, res) => {
  res.render('asterisk-emitter')
})

app.get('/imsibogwanham-2020', (req, res) => {
  res.render('imsibogwanham-2020')
})

app.get('/perfect-circle-2019', (req, res) => {
  res.render('perfect-circle-2019')
})

app.get('/tmmg-2017', (req, res) => {
  res.render('tmmg-2017')
})

app.listen(port, () => console.log(port))
