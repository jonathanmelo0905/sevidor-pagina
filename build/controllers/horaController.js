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
class HoraController {
    consultaSalud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = (yield database_1.default).query('SELECT * FROM seguridads_social');
            res.json(yield clientes);
        });
    }
    consultaOneSalud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            console.log(cedula, 'esta es la cedula averiguar');
            const seguridadSocial = (yield database_1.default).query('SELECT * FROM seguridads_social WHERE cedula = ?', [cedula]);
            res.json(yield seguridadSocial);
        });
    }
    createdHora(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            (yield database_1.default).query('INSERT INTO registro_entrada_salida set ?', [req.body]);
            res.json({ Text: 'trabajador registrado' });
        });
    }
    deleteClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield database_1.default).query('DELETE FROM clientes WHERE id = ?', [id]);
            res.json({ Text: 'cliente eliminado' });
        });
    }
    actualizarClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield database_1.default).query('UPDATE clientes SET ? WHERE id = ?', [req.body, id]);
            res.json({ Text: 'actualizando el cliente' + req.params.id });
        });
    }
}
const horaController = new HoraController();
exports.default = horaController;
