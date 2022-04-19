const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const mongoose = require('mongoose')
const route = require('./routes/route.js')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multer().any())

mongoose.connect("mongodb+srv://thorium-cohort:qwertyuiop@cluster0.xyklh.mongodb.net/MSQProductsManagement?authSource=admin&replicaSet=atlas-wc30tm-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {
    useNewUrlParser: true
})
.then(() => console.log('Connected to Database...'))
.catch(error => console.log(error))

app.use('/', route)

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})