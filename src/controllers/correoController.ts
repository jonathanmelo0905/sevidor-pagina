import {Request, response, Response} from 'express';
import nodemailer from 'nodemailer';
import { transporter } from './../config/mailer';


class sendMail{
    public async enviarCorreo(req: Request, res: Response){

        console.log(req.body);
        const seleccion = req.body.id;
        const correo = req.body.correo;
        const apartamento = req.body.apartamento;
        const apttexto2 = req.body.apttexto2;




        if(seleccion === 1){
            try {
                await transporter.sendMail({
                    from: '"Información Proyectos Hábitat Constructores" <jonathanmelo0905@gmail.com>', // sender address
                    to: correo, // list of receivers
                    subject: "Información Apartamentos Nissi Condominio Campestre, Villeta", // Subject line
                    text: "Hello world?", // plain text body
                    html: `
                    <div class="correo" style="display: grid; padding: 20px; text-align: justify;">
                    <p>Apreciado <b>Cliente,</b></p>
                    <p>Reciba un cordial saludo de parte del equipo comercial de Nissi Condominio Campestre Villeta.</p>
                    <p>Nissi Condominio Campestre está ubicado en el corazón de Villeta, en el eje de mayor desarrollo urbanístico y de gran proyección de valorización.</p>
                    <p>Nos alegra presentarle nuestro hermoso proyecto de Apartamentos Campestres en Villeta y brindarle toda la información para que asegure un lugar en este, el mejor proyecto de la región.</p>
                    <p>De acuerdo a su solicitud, le enviamos la información requerida y esperamos que le sea útil y sobre todo que reafirme su interés de invertir en nuestro proyecto.</p>
                    <h3>Nissi Condominio Campestre</h3>
                    <p>Nuestro Condominio cuenta con más de 8500 m2 de áreas libres y zonas verdes, gimnasio, cancha de Fútbol 5, cancha de mini Tenis, 
                        Casa del Árbol, 2 zonas de piscinas cada una de ellas con piscina de niños y piscinas familiares, Lobby, Enfermería, Sede Social, 
                        30 parqueaderos para visitantes, y una gran terraza de servicios con jacuzzis, sauna, turco, zona para Spa y zona para restaurante.
                    </p>
                    <h3>Nuevo Proyecto de Apartamentos Campestres</h3>
                    <p>
                        El nuevo edificio en Nissi Condominio Campestre tiene un diseño exclusivo y vanguardista, de 5 pisos con ascensor panorámico, 
                        una terraza de servicios de más de 1.000 m2 (metros cuadrados) y consta de 54 apartamentos.
                    </p>
                    <p>
                        En este espectacular edificio aun tenemos disponibles un apartamento con diseño moderno y exclusivo, con excelentes acabados y aireación natural; con 3 Alcobas, 2 Baños, Balcón, Cocina, Sala, 
                        Comedor, Lavandería y Parqueadero; de tal manera que, aún cuenta con estas oportunidades de inversión exclusiva.
                    </p>
                    <p>
                        ${apartamento}
                    </p>
                    <p>
                        ${apttexto2}
                    </p>
                    <p>
                        Villeta es hoy la ciudad de mayor preferencia como lugar de descanso y veraneo, por su cercanía a Bogotá, sus dos autopistas y una de ellas muy amplia de doble calzada con separador, 
                        haciendo el regreso a la capital del país de manera rápida, segura y placentera, sin trancones ni alteración de orden público.
                    </p>
                    <p>
                        ¡Lejos de todo, pero cerca de todo!
                    </p>
                    <p>
                        Ubicación del proyecto:
                    </p>
                    <div style="display: grid; width: 100%; justify-content: center;padding: 10px 0;">
                        <a href="https://www.google.com/maps/place/Nissi+Condominio+Campestre/@5.0139966,-74.4686356,17z/data=!4m5!3m4!1s0x8e409a4234bbe347:0xef9f49b2b97435c6!8m2!3d5.014234!4d-74.468981?hl=es">
                            <img style="width: 200px; height: max-content;" src="https://fotos-habitat.s3.amazonaws.com/ubiacion.png" alt="">
                        </a>
                    </div>
                    <p>
                        Sin más que agregar le hago la invitación especial para que ahora mismo, pueda agendar una cita en nuestro Showroom Online y así, 
                        tenga la oportunidad de conocer cada detalle del proyecto y pueda separar su propiedad con un precio diferencial.
                    </p>
                    <p>Agende su cita virtual dando click aquí:</p>
                    <div style="display: grid; width: 100%; justify-content: center; padding: 10px 0;">
                        <a href="https://habitatconstructores.co/showroom/">
                            <img style="display: block; width: 300px; height: max-content;" src="https://fotos-habitat.s3.amazonaws.com/citas-online.png" alt="">
                        </a>
                    </div>
                    <p>
                        Adjunto envío documento con el Diseño Edificio Nissi Condominio Campestre.
                    </p>
                    <p>
                        Cualquier información adicional que necesite, estaré atendiendo con prontitud.
                    </p>
                    <p>
                        Cordialmente,
                    </p>
                    <div style="display: flex; width: 100%; gap: 20px;">
                    <img style="width: 150px; height: 120px;" src="https://fotos-habitat.s3.amazonaws.com/logohabitat.png" alt="logo-habitat-constructores">
                    <div style="display: grid; gap: 2px;">
                        <b style="color: red;  margin: 0;">Ana González</b>
                        <p style="margin: 0;">Asesora  Comercial</p>
                        <p style="margin: 0;">HABITAT CONSTRUCTORES S.A</p>
                        <p style="margin: 0;"><b style="color: red;  padding: 0;">m:</b>321 438 0764</p>
                        <p style="margin: 0;"><b style="color: red;  padding: 0;">a:</b>Villeta, Colombia</p>
                        <p style="margin: 0;"><b style="color: red;  padding: 0;">w:</b>info@habitatconstructores.com</p>
                    </div>
                    </div>
                </div>
                    `,
                attachments: [
                    {
                        filename: 'Catalogo Digital Nissi.pdf',
                        path: './src/archivos/Catalogo Digital Nissi.pdf',
                        contentType: 'application/pdf'
                    }
                ] // html body
                });
                res.json({ok: "correo enviado"})
            } catch (error) {
                console.log(error);
            }
        }else if( seleccion === 2){
            try {
                await transporter.sendMail({
                    from: '"Información Proyectos Hábitat Constructores" <jonathanmelo0905@gmail.com>', // sender address
                    to: correo, // list of receivers
                    subject: "Información Montes del Retiro Payandé", // Subject line
                    text: "Hello world?", // plain text body
                    html: `
                    <div class="correo" style="display: grid; grid-template-columns: 100%; padding: 20px 0; text-align: justify;">
                        <p>Apreciado <b>Cliente,</b></p>
                        <p>
                            Reciba un cordial saludo de parte del equipo comercial de Montes del Retiro Payandé Villeta.
                        </p>
                        <p>
                            Nos alegra presentarle nuestro hermoso proyecto Montes del Retiro Payandé en Villeta y brindarle 
                            toda la información para que aproveche la oportunidad de asegurarse un lugar en éste, el mejor proyecto de la región.
                        </p>
                        <p>
                            De acuerdo a su solicitud, le enviamos la información requerida y esperamos que le sea útil y 
                            sobre todo que reafirme su interés de invertir en nuestro proyecto.
                        </p>
                        <h3>Montes del Retiro Payandé</h3>
                        <p>
                            La extensión de terreno donde desarrollamos Nuestro Proyecto es de 34,5 hectáreas, allí encontrará zonas libres y 
                            áreas comunes como, cancha de tenis, cancha múltiple, circuito para corredores y ciclistas, senderos naturales, 
                            putting green, jaula de golf y cuatro grandes pulmones ubicados a lo largo del terreno para que pueda tener 
                            la experiencia natural de vivir entre montes.
                        </p>
                        <h3>Nuevo Proyecto de Lotes y Casas </h3>
                        <p>
                            El nuevo proyecto que estamos construyendo en Villeta tiene un diseño exclusivo y vanguardista, con vías adoquinadas, 
                            alumbrado público con páneles solares, vigilancia privada, portería, circuito cerrado, cerramiento perimetral y zona de servicios.
                        </p>
                        <p>
                            En este espectacular proyecto le brindamos un gran abanico de posibilidades para escoger el lote o la casa que se ajuste a su gusto y presupuesto.
                        </p>
                        <p>
                            <b>Precio diferencial:</b> Lo mejor de todo son los precios para todos los presupuestos.
                        </p>
                        <p>
                            <b>Lotes:</b> Con medidas desde 2.287 m2 hasta 4.880 m2 aprox.
                        </p>
                        <ul>
                            <li>Primera Etapa:  ¡VENDIDA!</li>
                            <li>Segunda Etapa: Desde $387.223.690.oo en adelante.</li>
                            <li>Tercera Etapa: ¡Próximamente!</li>
                        </ul>
                        <p><b>Casas:</b> Diseñadas de acuerdo a las necesidades y solicitud de cada cliente.</p>
                        <p><i>*Los valores aquí especificados pueden variar de acuerdo a la disponibilidad.</i></p>
                        <p>
                            Ubicación del proyecto:
                        </p>
                        <div style="display: flex; width: 100%; padding: 10px 0;">
                            <a href="https://www.google.com/maps/@5.0684533,-74.4468372,3a,75y,125.11h,89.89t/data=!3m6!1e1!3m4!1s-HOBzzpaWiEJ0tdIf7qmIQ!2e0!7i13312!8i6656">
                                <img style="display: flex; width: 60%; height: max-content; margin: 0 auto;" src="https://fotos-habitat.s3.amazonaws.com/ubiacion.png" alt="">
                            </a>
                        </div>
                        <p>
                            También puede encontrarnos en WAZE como Montes del Retiro Payandé.
                        </p>
                        <p>
                            Sin más que agregar le hago la invitación especial para que ahora mismo, pueda agendar una cita en nuestro Showroom Online y así, 
                            tenga la oportunidad de conocer cada detalle del proyecto y pueda separar su propiedad con un precio diferencial.
                        </p>
                        <p>Agende su cita virtual dando click aquí:</p>
                        <div style="display: flex; width: 100%; padding: 10px 0;">
                            <a href="https://habitatconstructores.co/showroom/">
                                <img style="display: flex; width: 70%; height: max-content; margin: 0 auto;" src="https://fotos-habitat.s3.amazonaws.com/citas-online.png" alt="">
                            </a>
                        </div>
                        <p>
                            Adjunto envío catálogo digital y la ubicación del proyecto.
                        </p>
                        <p>
                            Cualquier información adicional que necesite, estaré atendiendo con prontitud.
                        </p>
                        <p>
                            Cordialmente,
                        </p>

                        <div style="display: flex; width: 100%; gap: 20px;">
                            <img style="width: 150px; height: 120px;" src="https://fotos-habitat.s3.amazonaws.com/logohabitat.png" alt="logo-habitat-constructores">
                            <div style="display: grid; gap: 2px;">
                                <b style="color: red;  margin: 0;">Ana González</b>
                                <p style="margin: 0;">Asesora  Comercial</p>
                                <p style="margin: 0;">HABITAT CONSTRUCTORES S.A</p>
                                <p style="margin: 0;"><b style="color: red;  padding: 0;">m:</b>  321 438 0764</p>
                                <p style="margin: 0;"><b style="color: red;  padding: 0;">a:</b>  Villeta, Colombia</p>
                                <p style="margin: 0;"><b style="color: red;  padding: 0;">w:</b>  info@habitatconstructores.com</p>
                            </div>
                        </div>
                    </div>
                    `,
                attachments: [
                    {
                        filename: 'Catalogo Montes del Retiro payande.pdf',
                        path: './src/archivos/Catalogo Montes del Retiro payande.pdf',
                        contentType: 'application/pdf'
                    }
                ] // html body
                });
                res.json({ok: "correo enviado"})
            } catch (error) {
                console.log(error);
            }
        }else if( seleccion === 3){
            try {
                await transporter.sendMail({
                    from: '"Información Proyectos Hábitat Constructores" <jonathanmelo0905@gmail.com>', // sender address
                    to: correo, // list of receivers
                    subject: "Información Casa 7- Nissi Condominio Campestre, Villeta", // Subject line
                    text: "Hello world?", // plain text body
                    html: `
                    <div class="correo" style="display: grid; grid-template-columns: 100%; padding: 20px 0; text-align: justify;">
                    <p>Apreciado <b>Cliente,</b></p>
                    <p>
                        Reciba un cordial saludo de parte del equipo comercial de Hábitat Constructores S.A.
                    </p>
                    <p>
                        De acuerdo con su solicitud, le envío las especificaciones de la casa campestre y 
                        las bondades de este espectacular inmueble disponible en la actualidad para entrega inmediata.
                    </p>
                    <p>
                        La casa es esquinera, cuenta con un área total de 340 m2, de los cuales 260 m2 son de área 
                        privada. Su diseño moderno y exclusivo, con excelentes acabados y aireación natural la hacen única en la zona y muy confortable.
                    </p>
                    <h3>Características:</h3>
                    <ul style="display: grid;gap: 10px;">
                        <li>2 parqueaderos privados cubiertos.</li>
                        <li>Puerta principal en cedro macizo, con chapa biométrica.</li>
                        <li>Todas las puertas de la casa son en cedro macizo de piso a techo.</li>
                        <li>Todas las ventanas son en cristal de seguridad y van de piso a techo</li>
                        <li>Casa domotizada (puerta de acceso principal, aires acondicionados, iluminación, cortinas frontales, televisores, decodificadores, sonido, jacuzzi y ducha externa).</li>
                        <li>3 aires acondicionados inverter (en alcoba principal, sala y alcoba diseñada para estudio de grabación).</li>
                        <li>Sistema de sonido Harman Kardon 7.1 (en sala principal, comedor y sala de televisión).</li>
                        <li>Jacuzzi para 12 personas. 1 Caldera Pentair, 1 bloower, 2 motores de hidro-masajes, filtro, motor filtración, clorizador y sistema de iluminación, cuarto de máquinas.</li>
                        <li>Cocina con isla, totalmente motorizada (sistemas blum), Electrodomésticos Kitchen Aid: lavavajillas, triturador de alimentos, torre de hornos, estufa, extractor tipo campana, mesones en mármol, muebles en madera y acabado en acrílico metacrilato, de Krono System, Barra tipo bar.</li>
                        <li>Comedor.</li>
                        <li> 5 alcobas: 2 alcobas principales y 3 auxiliares.</li>
                        <li>5 baños: 2 baños privados, 2 baños auxiliares y 1 baño social.</li>
                        <li>Sala.</li>
                        <li>Alcoba diseñada para estudio de grabación, insonorizada, con doble puerta y cuarto de consolas.</li>
                        <li>Sala de televisión.</li>
                        <li>Amplia zona de lavandería.</li>
                    </ul>
                    <p>
                        Adicionalmente, el Condominio cuenta con más de 8.500 metros de áreas libres y zonas verdes, gimnasio, cancha de Fútbol 5, cancha de mini Tenis, Casa del Árbol, 
                        2 modernas zonas de piscinas, cada una de ellas con piscina de niños y piscinas familiares, Lobby, Enfermería, Sede Social, 
                        30 parqueaderos para visitantes, y una gran terraza de servicios con jacuzzis, sauna, turco, zona para Spa y zona para restaurante.
                    </p>
                    <p>Precio: $980.000.000.oo</p>
                    <h3>Ubicación:</h3>
                    <p>Está ubicada en el corazón de Villeta, en la zona de mayor desarrollo urbanístico y alta valorización.</p>
                    <p>Villeta es hoy la ciudad de mayor preferencia como lugar de descanso y veraneo, por su cercanía a Bogotá, sus dos autopistas y una de ellas muy amplia de doble calzada con separador, haciendo el regreso a la capital del país de manera rápida, segura y placentera, sin trancones ni alteración de orden público.</p>
                    <p><i>¡Lejos de todo, pero cerca de todo!</i></p>
                    <p>Sin más que agregar le hago la invitación especial para que ahora mismo, pueda agendar una cita en nuestro Showroom Online y así, tenga la oportunidad de conocer cada detalle de esta hermosa casa y de esta manera podamos responder a sus dudas o inquietudes.</p>
                    
                    <p>Agende su cita virtual dando click aquí:</p>
                    <div style="display: grid; width: 100%; justify-content: center; padding: 10px 0;">
                        <a href="https://habitatconstructores.co/showroom/">
                            <img style="display: display; width: 80%; height: max-content; margin: 0 auto;" src="https://fotos-habitat.s3.amazonaws.com/citas-online.png" alt="">
                        </a>
                    </div>
                    <p>
                        Nota: Adjunto envío fotos de la casa.
                    </p>
                    <p>
                        Cualquier información adicional, estaré atento a suministrarla.
                    </p>
                    <p>
                        Cordialmente,
                    </p>

                    <div style="display: flex; width: 100%; gap: 20px;">
                        <img style="width: 150px; height: 120px;" src="https://fotos-habitat.s3.amazonaws.com/logohabitat.png" alt="logo-habitat-constructores">
                        <div style="display: grid; gap: 2px;">
                            <b style="color: red;  margin: 0;">Ana González</b>
                            <p style="margin: 0;">Asesora  Comercial</p>
                            <p style="margin: 0;">HABITAT CONSTRUCTORES S.A</p>
                            <p style="margin: 0;"><b style="color: red;  padding: 0;">m:</b>  321 438 0764</p>
                            <p style="margin: 0;"><b style="color: red;  padding: 0;">a:</b>  Villeta, Colombia</p>
                            <p style="margin: 0;"><b style="color: red;  padding: 0;">w:</b>  info@habitatconstructores.com</p>
                        </div>
                    </div>
                </div>
                    `,
                attachments: [
                    {
                        filename: 'CASA CAMPESTRE 07.pdf',
                        path: './src/archivos/CASA CAMPESTRE 07.pdf',
                        contentType: 'application/pdf'
                    }
                ]
                });
                res.json({ok: "correo enviado"})
            } catch (error) {
                console.log(error);
            }
        }
        


        
    }
}

const sendmail = new sendMail();

export default sendmail;