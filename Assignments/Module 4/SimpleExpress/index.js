const express = require('express')
const app = express()
const PORT = 3000;

app.get('/home', (req, res)=>{
    res.json({message: "This is the home page"});
});
app.get('/contactus', (req, res)=> {
    res.json({email: "ganagallajoshitha@gmail.com"});
});
app.get('/about', (req, res)=> {
    res.json({message: "Welcome to the About page"});
});
app.listen(PORT, ()=>{
    console.log('Server is running on https://localhost:${PORT}');
});