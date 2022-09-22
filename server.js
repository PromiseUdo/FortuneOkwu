const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')

mongoose
  .connect('mongodb://127.0.0.1:27017/fitnesblog')
  .then(() => {
    app.listen(PORT, () => {
      console.log('App started on port 3000')
    })
  })
  .catch(() => {
    console.log('Database connection failed')
  })

app.use(express.static('public'))
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/posts', (req, res) => {
  res.render('posts.ejs')
})
