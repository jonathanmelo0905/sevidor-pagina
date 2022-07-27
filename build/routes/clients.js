"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cientsController_1 = __importDefault(require("../controllers/cientsController"));
class Clients {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cientsController_1.default.clients);
    }
}
const clients = new Clients();
exports.default = clients.router;
