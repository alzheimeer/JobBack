//"1"importamos framework espress y lo guardamos en una constante llamada con el mismo nombre
const express = require('express');

//para middleware usamos cors
const cors = require('cors');

//inicializamos express, lo ejecutamos express() y esto me devuelve un objeto k por lo general
//lo guardamos en una constante llamada app
const app = express();

//settings
//en este caso se interpreta qe el busca lo primero y si no existe || deja lo que sigue
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());


//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));




//ahora exportamos app, porque en app.js no iniciamos el servidor eso lo hace index.js app.js solo lo define
module.exports = app;
