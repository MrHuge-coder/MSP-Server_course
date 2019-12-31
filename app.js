const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const mrouter = require('./routes/router')
const exphbs = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 2000

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)

app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(mrouter)
app.use(express.static(path.join(__dirname, 'public')))


async function start() {
    try {
      await mongoose.connect(
        'mongodb://localhost:27017/test',
        {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        }
      )
      app.listen(PORT, () => {
        console.log('Server has been started on port ' + PORT)
        console.log('MongoDB connect')
      })
    } catch (e) {
      console.log(e)
    }
  }
  
  start()
  


app.use((req, res, next) => {
  res.status(404).render('404')
})
 
// app.use((err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).render('500')
// })
