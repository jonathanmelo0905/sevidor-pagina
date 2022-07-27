import { Router } from "express";

import clientController from "../controllers/cientsController";


class ClientsRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', clientController.consultaClients);
        this.router.get('/:id', clientController.consultaOneClients);
        this.router.post('/', clientController.createdClients);
        this.router.put('/:id', clientController.actualizarClients);
        this.router.delete('/:id', clientController.deleteClients);
    }
    

}

const clients = new ClientsRoutes();
export default clients.router;