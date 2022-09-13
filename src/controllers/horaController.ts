import {request, Request, Response} from 'express'

import pool from "../database"

class HoraController{
    
    public async consultaRegistro (req: Request, res: Response){
        const clientes = (await pool).query('SELECT * FROM registro_entrada_salida');
        res.json(await clientes);
    }

    public async consultaOneSalud (req: Request, res: Response): Promise<any>{
        const {cedula} = req.params;
        console.log(cedula, 'esta es la cedula averiguar')
        const seguridadSocial = (await pool).query('SELECT * FROM seguridads_social WHERE cedula = ?', [cedula]);
        res.json(await seguridadSocial);
    }


    public async createdHora(req: Request, res: Response){
        console.log(req.body);
        (await pool).query('INSERT INTO hora set ?', [req.body]);
        res.json({Text: 'trabajador registrado'});
    }

    public async deleteClients (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        (await pool).query('DELETE FROM clientes WHERE id = ?', [id]);
        res.json({Text: 'cliente eliminado'});
    }

    public async actualizarClients (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        (await pool).query('UPDATE clientes SET ? WHERE id = ?', [req.body ,id])
        res.json({Text: 'actualizando el cliente' + req.params.id});
    }


}

const horaController = new HoraController();

export default horaController;