const express = require('express')
const connectDB = require('./config/db')

const app = express();

//Connect DB
connectDB();

app.get('/', (req, res) => {
  res.send(`Api Running on port ${PORT}`)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
