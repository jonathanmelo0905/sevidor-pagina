"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const saludController_1 = __importDefault(require("../controllers/saludController"));
class SaludRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', saludController_1.default.consultaSalud);
        this.router.get('/consulta/:cedula', saludController_1.default.consultaOneSalud);
        // this.router.post('/', trabajadorController.createdTrabajadores);
        // this.router.post('/', trabajadorController.createdVehiculo);
        // this.router.put('/:id', trabajadorController.actualizarClients);
        // this.router.delete('/:id', trabajadorController.deleteClients);
    }
}
const salud = new SaludRoutes();
exports.default = salud.router;
