"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantesModule = void 0;
const common_1 = require("@nestjs/common");
const plantes_service_1 = require("./plantes.service");
const plantes_controller_1 = require("./plantes.controller");
const mongoose_1 = require("@nestjs/mongoose");
const plante_entity_1 = require("./entities/plante.entity");
let PlantesModule = class PlantesModule {
};
PlantesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: plante_entity_1.Plante.name, schema: plante_entity_1.PlanteSchema }]),
        ],
        controllers: [plantes_controller_1.PlantesController],
        providers: [plantes_service_1.PlantesService],
        exports: [plantes_service_1.PlantesService],
    })
], PlantesModule);
exports.PlantesModule = PlantesModule;
//# sourceMappingURL=plantes.module.js.map