import { Router } from "express";

import trabajadorController from "../controllers/trabajadoresController";


class ClientsRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', trabajadorController.consultaClients);
        this.router.get('/trabajador/:cedula', trabajadorController.consultaOneClients);
        this.router.post('/', trabajadorController.createdTrabajadores);
        //this.router.post('/', trabajadorController.createdVehiculo);
        this.router.put('/:id', trabajadorController.actualizarClients);
        this.router.delete('/:id', trabajadorController.deleteClients);
    }
    

}

const trabajadores = new ClientsRoutes();
export default trabajadores.router;