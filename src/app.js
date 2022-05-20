// npm i nodemon -g
const express = require('express');
const hbs = require('hbs');
const app = express();
const  path = require('path');

// if you host this website then you have to write port variable(enviroment variable)
// const port = process.env.PORT || 300;
const port = 300;

const staticPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname,'../template/views');
const partialsPath = path.join(__dirname,'../template/partials')

app.set('view engine','hbs');
app.set('views',templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

//routing
app.get("/",(req,res)=>{
    res.render("index");
}).listen(port);
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
// if don't match anything then open this page
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:'Opps page could not found',
    });
});