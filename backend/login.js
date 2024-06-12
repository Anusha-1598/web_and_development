const express = require('express');

const app = express()

app.use("/",(req,res,next) => {
    res.send("Hi");
})

app.listen(5000, ()=> {
    console.log(`Connected to Localhost Port ${5000}`);
})
