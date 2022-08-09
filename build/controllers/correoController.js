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
                    html: `<div>
                <h1>Hola soy Julian Cubillos</h1>
                <h2>Gracias por darme la oportunidad de conocerte</h2>
                <h1>${nombre}</h1>
                <h4>si quieres saber mas de mi aqui te dejo mis redes</h4>
            </div>`, // html body
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
