import {Request, Response} from 'express'

class IndexController{
    
    index (req: Request, res: Response){
        res.json({text: 'Api is /register/cliente'});
    }


}

export const indexController = new IndexController();