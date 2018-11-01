var express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send("this is root");
});
app.get('/home',(req,res)=>{
    res.send("This is Home");
});

app.get('/about',(req,res)=>{
    res.send("This is About");
});
app.get('/login',(req,res)=>{
    res.send("This is Login");
});
app.get('/register',(req,res)=>{
    res.send("Please Register");
});
app.get('/contsct',(req,res)=>{
    res.send("Please Contact");
});
app.get('/services',(req,res)=>{
    res.send("Our Services");
});

app.listen(3000, ()=>{
    console.log("Peers ");
});

app.listen(5000, ()=>{
    console.log("Peers ");
});



