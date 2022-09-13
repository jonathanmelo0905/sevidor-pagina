"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const horaController_1 = __importDefault(require("../controllers/horaController"));
class HoraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', horaController_1.default.consultaRegistro);
        // this.router.get('/consulta/:cedula', saludController.consultaOneSalud);
        // this.router.post('/', trabajadorController.createdTrabajadores);
        this.router.post('/', horaController_1.default.createdHora);
        // this.router.put('/:id', trabajadorController.actualizarClients);
        // this.router.delete('/:id', trabajadorController.deleteClients);
    }
}
const hora = new HoraRoutes();
exports.default = hora.router;
