const express = require('express')
const app = express()
const port = 3000

// setting the route and corresponding response
// localhost:3000  ==> This is my first Express Web App
app.get('/', (req, res) => {
  res.send('This is my first Express Web App')
})

// localhost:3000/food  ==> My favorite food is ice cream
app.get('/food', (req, res) => {
  res.send('My favorite food is ice cream')
})

// localhost:3000/popular/languages  ==> JavaScript is a popular language
app.get('/popular/:languages', (req, res) => {
  res.send(`${req.params.languages} is a popular language`)
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})