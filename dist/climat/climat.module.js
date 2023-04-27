"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimatModule = void 0;
const common_1 = require("@nestjs/common");
const climat_service_1 = require("./climat.service");
const climat_controller_1 = require("./climat.controller");
const mongoose_1 = require("@nestjs/mongoose");
const climat_entity_1 = require("./entities/climat.entity");
const serial_service_1 = require("../serial/serial.service");
let ClimatModule = class ClimatModule {
};
ClimatModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: climat_entity_1.Climat.name, schema: climat_entity_1.ClimatSchema }]),
        ],
        controllers: [climat_controller_1.ClimatController],
        providers: [climat_service_1.ClimatService, serial_service_1.SerialService],
    })
], ClimatModule);
exports.ClimatModule = ClimatModule;
//# sourceMappingURL=climat.module.js.map