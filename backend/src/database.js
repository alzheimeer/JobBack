//"3"importamos mongoose y lo guardamos en una constante llamada con el mismo nombre
const mongoose = require('mongoose');
// desde index importa de primeras las variables env del sistema
// y aqui luego traemos la variable que necesitamos
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest';

//conecta a la bd
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//cuando se conecte el va a estar escuchando y da un aviso
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
})
