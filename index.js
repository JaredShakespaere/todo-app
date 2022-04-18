const express = require('express');
const app = express();

const pool = require('./db')

app.use(express.json());


//routes

//get todos

//create todos

// update

//delete



const PORT = 3000;
app.listen(3000 || PORT, () => {
  console.log(`server listening on ${PORT}`)
});
