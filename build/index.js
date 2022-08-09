"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//import indexRoutes from "./routes/indexRoute";
const clientsRoute_1 = __importDefault(require("./routes/clientsRoute"));
const lotesRoute_1 = __importDefault(require("./routes/lotesRoute"));
const mailRoute_1 = __importDefault(require("./routes/mailRoute"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        //this.app.use(indexRoutes);
        this.app.use('/correo', mailRoute_1.default);
        this.app.use('/cliente', clientsRoute_1.default);
        this.app.use('/lotes', lotesRoute_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
