const express = require("express")
const handlerbars = require('express-handlebars')
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");
const app = express();
//const mongose = require('mongoose')

// Configurações
 
// Body Parser

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
// Handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars');

// Mongoose 
// Rotas

// Outros

const PORT = 3000

app.listen(PORT,() => {
    console.log("Servidor rodando")
});