import express from 'express';
import { SERVER_PORT } from '../global/environment';


// genero una clase Server para manejar el servidor
export default class Server {

    // Defino propiedad app que es express
    public app: express.Application;
    // Defino el puerto
    public port: number;

    constructor(){

        this.app = express();
        // Consumo variable generada en el archivo env
        this.port = SERVER_PORT
    }
    // defino un metodo start para arrancar el server
    start(callback: Function){

        this.app.listen( this.port, callback() );
    }



}