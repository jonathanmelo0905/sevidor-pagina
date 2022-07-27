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
class ClientController {
    consultaClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = (yield database_1.default).query('SELECT * FROM clientes');
            res.json(yield clientes);
        });
    }
    consultaOneClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cliente = (yield database_1.default).query('SELECT * FROM clientes WHERE id = ?', [id]);
            res.json(yield cliente);
        });
    }
    createdClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            (yield database_1.default).query('INSERT INTO clientes set ?', [req.body]);
            res.json({ Text: 'creando el cliente' });
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
const clientController = new ClientController();
exports.default = clientController;
