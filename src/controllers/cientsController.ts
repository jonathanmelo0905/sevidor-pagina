import {request, Request, Response} from 'express'

import pool from "../database"

class ClientController{
    
    public async consultaClients (req: Request, res: Response){
        const clientes = (await pool).query('SELECT * FROM clientes');
        res.json(await clientes);
    }

    public async consultaOneClients (req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const cliente = (await pool).query('SELECT * FROM clientes WHERE id = ?', [id]);
        res.json(await cliente);
    }

    public async createdClients (req: Request, res: Response){
        console.log(req.body);
        (await pool).query('INSERT INTO clientes set ?', [req.body]);
        res.json({Text: 'creando el cliente'});
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

const clientController = new ClientController();

export default clientController;