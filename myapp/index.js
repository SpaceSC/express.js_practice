const express = require('express')
const app = express()
const port = 3000

// basic routing: app.METHOD(PATH, HANDLER)

app.get('/', (req, res) => {
  res.send('World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

// serving static files: express.static(root, [options])
// app.use(express.static('public'))
// app.use(express.static('files'))
//http://localhost:3000/ah.jpg

// with virtual path 
app.use('/static', express.static('public'))
app.use('/static', express.static('files')) // add multiple folders to serve from
// ctrl + c and node index.js to restart it after changes
// http://localhost:3000/static/ah.jpg
// http://localhost:3000/static/heman.gif

// use absolute path
// app.use('/static', express.static(path.join(__dirname, 'public')))
// http://localhost:3000/static/ah.jpg