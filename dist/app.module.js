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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const plantes_module_1 = require("./plantes/plantes.module");
const climat_module_1 = require("./climat/climat.module");
const serial_service_1 = require("./serial/serial.service");
const schedule_1 = require("@nestjs/schedule");
const tasks_service_1 = require("./tasks/tasks.service");
const tasks_module_1 = require("./tasks/tasks.module");
let AppModule = class AppModule {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async onModuleInit() {
        await this.tasksService.applySettings();
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            climat_module_1.ClimatModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            schedule_1.ScheduleModule.forRoot(),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                }),
            }),
            auth_module_1.AuthModule,
            plantes_module_1.PlantesModule,
            tasks_module_1.TasksModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, serial_service_1.SerialService, tasks_service_1.TasksService],
    }),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map