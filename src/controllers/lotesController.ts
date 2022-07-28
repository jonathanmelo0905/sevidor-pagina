import {request, Request, Response} from 'express'

import pool from "../database"

class LotesController{
    
    public async consultaLotes (req: Request, res: Response){
        const lotes = (await pool).query('SELECT * FROM info_lotes');
        res.json(await lotes);
    }

    public async consultaOneLotes (req: Request, res: Response): Promise<any>{
        const {area} = req.params;
        const {ubicacion} = req.params;
        const {precio} = req.params;
        
        const ida = area === "1" ? 300 : area === "2" ? 400 : 600 ;
        const idu = ubicacion;
        const idp = precio === "1" ? 300 : precio === "2" ? 400 : 600;        

        const lotes = (await pool).query('SELECT * FROM info_lotes WHERE area <= ? AND precio <= ? AND ubicacion = ?', [ida,idp,idu]);
        res.json(await lotes)
    }
}

const lotesController = new LotesController();

export default lotesController;