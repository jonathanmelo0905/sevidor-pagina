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
                html: `
                <body class="container-correo">
                        <h1>¡Hola Crack! 😄</h1>
                        <p>Soy Julían Cubillos Trackfiquer experto en ADS, junto con nuestro equipo de trabajo tenemos las estrategias para escalar las ventas de tu negocio.</p>
                        <p>La era digital de las redes sociales e internet NO es el futuro, es el presente y hoy por hoy podemos usar estos medios para crecer exponencialmente.</p>
                        <p>Te garantizamos nuestro servicio, estamos llevando a empresas de Colombia, España y Estados Unidos a otro nivel.🔝</p>
                        <p>Y muy seguro tu empresa puede ser una de ellas.😎</p>
                        <p>Dale al boton y hablemos directamente. (Sin ningún compromiso)⬇️</p>
                        <a class="enlace" target="_blank" href="https://wa.me/message/I4RVNWXJE4J2O1"><button class="boton">
                            ¡Quiero saber mas de que se trata!
                        </button></a>
                        <h4>un abrazo.</h4>
                </body>`, // html body
            });
            res.json({ok: "correo enviado"})
        } catch (error) {
            console.log(error);
        }
    }
}

const sendmail = new sendMail();

export default sendmail;