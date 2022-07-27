"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lotesController_1 = __importDefault(require("../controllers/lotesController"));
class LotesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', lotesController_1.default.consultaLotes);
        this.router.get('/:area/:ubicacion/:precio', lotesController_1.default.consultaOneLotes);
    }
}
const lotes = new LotesRoutes();
exports.default = lotes.router;
