"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialService = exports.SerialService = void 0;
const common_1 = require("@nestjs/common");
const serialport_1 = require("serialport");
const parser_readline_1 = require("@serialport/parser-readline");
let SerialService = class SerialService {
    constructor() {
        this.port = new serialport_1.SerialPort({
            path: 'COM10',
            baudRate: 9600,
            dataBits: 8,
            parity: 'none',
            stopBits: 1,
            autoOpen: false,
        });
        this.parser = this.port.pipe(new parser_readline_1.ReadlineParser({ delimiter: '\r\n' }));
    }
    getPort() {
        if (!this.port.isOpen) {
            this.openPort();
        }
        return this.port;
    }
    openPort() {
        this.port.open((err) => {
            if (err && err.message !== 'Port is already open') {
                return console.log('Error opening port: ', err.message);
            }
        });
    }
    getParser() {
        return this.parser;
    }
    writeToPort(data) {
        this.port.write(data, (error) => {
            if (error) {
                console.error('Error writing to port: ', error.message);
                setTimeout(() => {
                    this.writeToPort(data);
                }, 500);
            }
            else {
                console.log('Data sent to port');
            }
        });
    }
};
SerialService = __decorate([
    (0, common_1.Injectable)()
], SerialService);
exports.SerialService = SerialService;
const serialService = Object.freeze(new SerialService());
exports.serialService = serialService;
//# sourceMappingURL=serial.service.js.map