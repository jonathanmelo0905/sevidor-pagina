import { Router } from "express";
import saludController from "../controllers/saludController";



class SaludRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', saludController.consultaSalud);
        this.router.get('/consulta/:cedula', saludController.consultaOneSalud);
        // this.router.post('/', trabajadorController.createdTrabajadores);
        // this.router.post('/', trabajadorController.createdVehiculo);
        // this.router.put('/:id', trabajadorController.actualizarClients);
        // this.router.delete('/:id', trabajadorController.deleteClients);
    }
    

}

const salud = new SaludRoutes();
export default salud.router;