// import express into our file
const express = require('express')

// create a new express application
const app = express()

// define the port our server will run on
const port = 3000

// allow static asset in public folder
app.use(express.static('public'))

const root = require('path').join(__dirname, '../client', 'dist')
app.use(express.static(root))

// deinfe our server routes

app.get('/', (req, res)=>{
    res.sendFile('index.html',{ root })
})

app.get('/test', (req, res)=>{
    // do something when the server processes this request

    // send back a resposne to the client
    res.send("Server is operational")
})

app.post('/api', (req, res)=>{
    res.send("Received post request!")
})

// run our server to listen at the port we defined 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})