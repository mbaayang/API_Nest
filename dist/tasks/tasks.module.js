"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const plantes_module_1 = require("../plantes/plantes.module");
const tasks_service_1 = require("./tasks.service");
const plantes_service_1 = require("../plantes/plantes.service");
const plante_entity_1 = require("../plantes/entities/plante.entity");
const mongoose_1 = require("@nestjs/mongoose");
const serial_service_1 = require("../serial/serial.service");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            plantes_module_1.PlantesModule,
            mongoose_1.MongooseModule.forFeature([{ name: plante_entity_1.Plante.name, schema: plante_entity_1.PlanteSchema }]),
        ],
        providers: [tasks_service_1.TasksService, plantes_service_1.PlantesService, serial_service_1.SerialService],
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map