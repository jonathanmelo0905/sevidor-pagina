import {request, Request, Response} from 'express'

import pool from "../database"

class ClientController{
    
    public async consultaClients (req: Request, res: Response){
        const clientes = (await pool).query('SELECT * FROM trabajadores');
        res.json(await clientes);
    }

    public async consultaOneClients (req: Request, res: Response): Promise<any>{
        const {cedula} = req.params;
        console.log(cedula, 'esta es la cedula averiguar')
        const trabajador = (await pool).query('SELECT * FROM trabajadores WHERE cedula = ?', [cedula]);
        const seguridadSocial = (await pool).query('SELECT * FROM trabajadores WHERE cedula = ?', [cedula]);
        res.json(await trabajador);
    }

    public async consultaSalud (req: Request, res: Response): Promise<any>{
        const {cedula} = req.params;
        console.log(cedula, 'esta es la cedula averiguar')
        const seguridadSocial = (await pool).query('SELECT * FROM seguridads_social WHERE cedula = ?', [cedula]);
        res.json(await seguridadSocial);
    }

    public async createdTrabajadores(req: Request, res: Response){
        console.log(req.body);
        (await pool).query('INSERT INTO trabajadores set ?', [req.body]);
        res.json({Text: 'trabajador creado'});
    }

    public async createdVehiculo(req: Request, res: Response){
        console.log(req.body);
        (await pool).query('INSERT INTO vehiculo set ?', [req.body]);
        res.json({Text: 'trabajador creado'});
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

const trabajadorController = new ClientController();

export default trabajadorController;