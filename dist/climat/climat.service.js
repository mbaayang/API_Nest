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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const climat_entity_1 = require("./entities/climat.entity");
const websockets_1 = require("@nestjs/websockets");
const serial_service_1 = require("../serial/serial.service");
let ClimatService = class ClimatService {
    constructor(ClimatSchema) {
        this.ClimatSchema = ClimatSchema;
        this.port = serial_service_1.serialService.getPort();
        console.log(this.port.isOpen);
        this.parser = serial_service_1.serialService.getParser();
    }
    async handleConnection(client, ...args) {
        this.parser.on('data', (data) => {
            const values = data.split('/');
            console.log(values);
            const temperature = parseFloat(values[0]);
            console.log(temperature);
            const humidityA = parseFloat(values[1]);
            console.log(humidityA);
            const humidityS = parseFloat(values[2]);
            console.log(humidityS);
            const luminosity = parseFloat(values[3]);
            console.log(luminosity);
            client.emit('data', { temperature, humidityA, humidityS, luminosity });
            const now = new Date();
            const saveTimes = [
                { hour: 9, minute: 18, second: 0 },
                { hour: 12, minute: 43, second: 0 },
            ];
            for (const saveTime of saveTimes) {
                if (now.getHours() === saveTime.hour &&
                    now.getMinutes() === saveTime.minute &&
                    now.getSeconds() === saveTime.second) {
                    if (!isNaN(temperature) &&
                        !isNaN(humidityA) &&
                        !isNaN(humidityS) &&
                        !isNaN(luminosity)) {
                        this.create({ temperature, humidityA, humidityS, luminosity });
                        console.log(`Saved data at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
                    }
                }
            }
        });
    }
    async aggregateValues() {
        const result = await this.ClimatSchema.aggregate([
            {
                $group: {
                    _id: {
                        year: { $year: '$savedAt' },
                        month: { $month: '$savedAt' },
                        day: { $dayOfMonth: '$savedAt' },
                    },
                    temperature: { $avg: '$temperature' },
                    humidityA: { $avg: '$humidityA' },
                    humidityS: { $avg: '$humidityS' },
                    luminosity: { $avg: '$luminosity' },
                },
            },
        ]);
        return result;
    }
    create(createClimatDto) {
        const createdClimat = new this.ClimatSchema(createClimatDto);
        return createdClimat.save();
    }
    findAll() {
        return this.ClimatSchema.find().exec();
    }
    findOne(id) {
        return this.ClimatSchema.findById(id).exec();
    }
};
ClimatService = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true, namespace: 'climat' }),
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(climat_entity_1.Climat.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClimatService);
exports.ClimatService = ClimatService;
//# sourceMappingURL=climat.service.js.map