"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailer_1 = require("./../config/mailer");
class sendMail {
    enviarCorreo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const correo = req.body.correo;
            const nombre = req.body.nombre;
            try {
                yield mailer_1.transporter.sendMail({
                    from: '"Hola soy julian cubillos" <jonathanmelo0905@gmail.com>',
                    to: correo,
                    subject: "Soy Julian Cubillos",
                    text: "Hello world?",
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
                res.json({ ok: "correo enviado" });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const sendmail = new sendMail();
exports.default = sendmail;
