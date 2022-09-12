"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trabajadoresController_1 = __importDefault(require("../controllers/trabajadoresController"));
class ClientsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', trabajadoresController_1.default.consultaClients);
        this.router.get('/trabajador/:cedula', trabajadoresController_1.default.consultaOneClients);
        this.router.post('/', trabajadoresController_1.default.createdTrabajadores);
        //this.router.post('/', trabajadorController.createdVehiculo);
        this.router.put('/:id', trabajadoresController_1.default.actualizarClients);
        this.router.delete('/:id', trabajadoresController_1.default.deleteClients);
    }
}
const trabajadores = new ClientsRoutes();
exports.default = trabajadores.router;
