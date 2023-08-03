const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const connectDB = require('./config/db')
const cors = require('cors')

app.use(cors({origin : true , credentials:true }))

const books = require('./routes/api/books')
app.use(bodyParser.json());
app.use('/api/books' , books)

connectDB()
app.get('/',(req,res) =>res.send("Hello world"))

const PORT = process.env.PORT || 8082
app.listen(PORT , ()=>console.log(`server runnig on port ${PORT}`))