// importo el server que construi
import Server from "./classes/server";
import router from "./routes/router";
import bodyParser = require("body-parser");
import cors from 'cors';




// Lo inicializo en una variable
const server = new Server();

// Utilizo bodyParser para manejar la data que recibo
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// Cors
server.app.use( cors( { origin: true, credentials: true } ) );

// le digo al server las rutas que tiene que usar
server.app.use('/', router);

// llamo a su metodo start y corro una funcion que solo dice que levanto
server.start(() => {

    console.log(`Servidor corriendo en el puerto ${ server.port }`);

})
