"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthGateway_1;
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const ws_1 = require("ws");
const auth_service_1 = require("./auth.service");
const serial_service_1 = require("../serial/serial.service");
const schedule_1 = require("@nestjs/schedule");
const common_1 = require("@nestjs/common");
let AuthGateway = AuthGateway_1 = class AuthGateway {
    constructor(authService, schedulerRegistry) {
        this.authService = authService;
        this.schedulerRegistry = schedulerRegistry;
        this.port = serial_service_1.serialService.getPort();
        this.parser = serial_service_1.serialService.getParser();
    }
    handleArrosageOn(client, payload) {
        serial_service_1.serialService.writeToPort('1');
    }
    handleArrosageOff(client, payload) {
        serial_service_1.serialService.writeToPort('0');
    }
    handleToitOn(client, payload) {
        serial_service_1.serialService.writeToPort('o');
    }
    handleToitOff(client, payload) {
        serial_service_1.serialService.writeToPort('f');
    }
    checkPortStatus(client) {
        const logger = new common_1.Logger(AuthGateway_1.name);
        if (!this.port.isOpen) {
            this.port.open((err) => {
                if (err && err.message !== 'Port is already open') {
                    this.server.emit('systeme_off', err.message);
                    logger.log('Arduino Absent!');
                    return console.log('Error opening port: ', err.message);
                }
                else {
                    this.server.emit('systeme_on', 'Port ouvert');
                }
            });
        }
        else {
            this.server.emit('systeme_on', 'Port ouvert');
        }
    }
    handleConnection(client, ...args) {
        client.emit('hello', 'Hello client!');
        this.parser.on('data', (data) => {
            const values = data.split('/');
            let pompe = parseFloat(values[4]);
            let toit = parseFloat(values[5]);
            const fan = parseFloat(values[6]);
            const luminosity = parseFloat(values[3]);
            const humidityS = parseFloat(values[2]);
            if (luminosity < 300) {
                this.port.write('o');
                this.parser.on('data', (data) => {
                    toit = parseFloat(data.split('/')[5]);
                });
            }
            if (humidityS <= 5) {
                this.port.write('1');
                this.parser.on('data', (data) => {
                    pompe = parseFloat(data.split('/')[4]);
                });
            }
            client.emit('pompe_status', pompe);
            client.emit('toit_status', toit);
            client.emit('fan_status', fan);
        });
        this.parser.on('data', (data) => {
            const values = data.split('/');
            const rfid = values[7];
            if (rfid) {
                this.authService.loginRfid({ rfId: rfid }).then((res) => {
                    client.emit('auth', res);
                });
            }
        });
    }
    handleDisconnect(client) {
        client.leave();
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_a = typeof ws_1.Server !== "undefined" && ws_1.Server) === "function" ? _a : Object)
], AuthGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('arrosage_on'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", Object)
], AuthGateway.prototype, "handleArrosageOn", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('arrosage_off'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", Object)
], AuthGateway.prototype, "handleArrosageOff", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('toit_ouvert'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", Object)
], AuthGateway.prototype, "handleToitOn", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('toit_ferme'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", Object)
], AuthGateway.prototype, "handleToitOff", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_SECONDS),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], AuthGateway.prototype, "checkPortStatus", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Object)
], AuthGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AuthGateway.prototype, "handleDisconnect", null);
AuthGateway = AuthGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: true,
        namespace: 'auth',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, schedule_1.SchedulerRegistry])
], AuthGateway);
exports.AuthGateway = AuthGateway;
//# sourceMappingURL=auth.gateway.js.map