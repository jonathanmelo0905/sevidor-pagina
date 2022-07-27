"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cientsController_1 = __importDefault(require("../controllers/cientsController"));
class ClientsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cientsController_1.default.consultaClients);
        this.router.get('/:id', cientsController_1.default.consultaOneClients);
        this.router.post('/', cientsController_1.default.createdClients);
        this.router.put('/:id', cientsController_1.default.actualizarClients);
        this.router.delete('/:id', cientsController_1.default.deleteClients);
    }
}
const clients = new ClientsRoutes();
exports.default = clients.router;
