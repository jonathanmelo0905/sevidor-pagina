import { Router } from "express";

import sendmail from "../controllers/correoController";

class mailRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/', sendmail.enviarCorreo);
    }
    

}

const mail = new mailRoutes();
export default mail.router;