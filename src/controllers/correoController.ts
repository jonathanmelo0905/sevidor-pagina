import {Request, response, Response} from 'express';
import nodemailer from 'nodemailer';
import { transporter } from './../config/mailer';


class sendMail{
    public async enviarCorreo(req: Request, res: Response){

        console.log(req.body);
        const correo = req.body.correo;
        const nombre = req.body.nombre;
        try {
            await transporter.sendMail({
                from: '"Hola soy julian cubillos" <jonathanmelo0905@gmail.com>', // sender address
                to: correo, // list of receivers
                subject: "Soy Julian Cubillos", // Subject line
                text: "Hello world?", // plain text body
                html: `<div>
                <h1>Hola soy Julian Cubillos</h1>
                <h2>Gracias por darme la oportunidad de conocerte</h2>
                <h1>${nombre}</h1>
                <h4>si quieres saber mas de mi aqui te dejo mis redes</h4>
            </div>`, // html body
            });
            res.json({ok: "correo enviado"})
        } catch (error) {
            console.log(error);
        }
    }
}

const sendmail = new sendMail();

export default sendmail;