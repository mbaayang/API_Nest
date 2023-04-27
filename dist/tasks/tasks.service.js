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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const cron_1 = require("cron");
const plantes_service_1 = require("../plantes/plantes.service");
const serial_service_1 = require("../serial/serial.service");
let TasksService = class TasksService {
    constructor(planteService) {
        this.planteService = planteService;
    }
    async applySettings() {
        const plante = await this.planteService.findActive();
        if (!plante) {
            console.error('Schedule not found');
            return;
        }
        const hours = plante[0].heureArrosage.split('/');
        hours.forEach((hour) => {
            const time = 22;
            const minute = 26;
            const duration = 10;
            const pompeOnJob = new cron_1.CronJob(`0 ${minute} ${time} * * *`, () => {
                serial_service_1.serialService.writeToPort('1');
                console.log('Allumage pompe');
            }, null, true, 'UTC');
            const pompeOffJob = new cron_1.CronJob(`${duration} ${minute} ${time} * * *`, () => {
                serial_service_1.serialService.writeToPort('0');
                console.log('Extinction pompe');
            }, null, true, 'UTC');
            pompeOnJob.start();
            pompeOffJob.start();
        });
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [plantes_service_1.PlantesService])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map