require('dotenv').config();

//"2"importamos lo que estamos exportando desde app.js
const app = require('./app')
//"4" importamos la database, no lo guardamos porque solo se ejecuta.
require('./database');


async function main()
{
    //ahora iniciamos un servidor en el puerto 4000 que ejecute una funcion que imprime un msn
    await app.listen(app.get('port'));
    console.log("server in port", app.get('port'));

}

main();