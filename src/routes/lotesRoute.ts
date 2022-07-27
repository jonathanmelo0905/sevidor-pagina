import { Router } from "express";

import lotesController from "../controllers/lotesController";


class LotesRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', lotesController.consultaLotes);
        this.router.get('/:area/:ubicacion/:precio', lotesController.consultaOneLotes);
    }
    

}

const lotes = new LotesRoutes();
export default lotes.router;