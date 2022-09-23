import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

//import indexRoutes from "./routes/indexRoute";
import clients from './routes/clientsRoute'

import lotes from './routes/lotesRoute'
import mailRoute from './routes/mailRoute';
import salud from './routes/saludRoute';
import hora from './routes/horaRoute';
import trabajadores from './routes/trabajadoresRoute'


class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port',3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        //this.app.use(indexRoutes);
        this.app.use('/habitat/correo',mailRoute)
        this.app.use('/habitat/cliente',clients);
        this.app.use('/habitat/lotes',lotes);
        this.app.use('/habitat/acceso', trabajadores);
        this.app.use('/habitat/salud', salud);
        this.app.use('/habitat/registro', hora);
        this.app.use('/habitat/vehiculo', trabajadores);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port ', this.app.get('port'));
        });
    }
}


const server = new Server();
server.start();