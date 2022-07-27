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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LotesController {
    consultaLotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lotes = (yield database_1.default).query('SELECT * FROM info_lotes');
            res.json(yield lotes);
        });
    }
    consultaOneLotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { area } = req.params;
            const { ubicacion } = req.params;
            const { precio } = req.params;
            const ida = area === "1" ? 300 : area === "2" ? 400 : 600;
            const idu = ubicacion === "1" ? 'norte' : 'sur';
            const idp = precio === "1" ? 300 : precio === "2" ? 400 : 600;
            const lotes = (yield database_1.default).query('SELECT * FROM info_lotes WHERE area <= ? AND precio <= ? AND ubicacion = ?', [ida, idp, idu]);
            res.json(yield lotes);
        });
    }
}
const lotesController = new LotesController();
exports.default = lotesController;
