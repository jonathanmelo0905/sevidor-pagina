import { Router } from "express";
import horaController from "../controllers/horaController";



class HoraRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        // this.router.get('/', saludController.consultaSalud);
        // this.router.get('/consulta/:cedula', saludController.consultaOneSalud);
        // this.router.post('/', trabajadorController.createdTrabajadores);
        this.router.post('/', horaController.createdHora);
        // this.router.put('/:id', trabajadorController.actualizarClients);
        // this.router.delete('/:id', trabajadorController.deleteClients);
    }
    

}

const hora = new HoraRoutes();
export default hora.router;