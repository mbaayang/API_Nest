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
exports.ClimatController = void 0;
const common_1 = require("@nestjs/common");
const climat_service_1 = require("./climat.service");
const create_climat_dto_1 = require("./dto/create-climat.dto");
let ClimatController = class ClimatController {
    constructor(climatService) {
        this.climatService = climatService;
    }
    create(createClimatDto) {
        return this.climatService.create(createClimatDto);
    }
    findAll() {
        return this.climatService.findAll();
    }
    findMoy() {
        return this.climatService.aggregateValues();
    }
    findOne(id) {
        return this.climatService.findOne(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_climat_dto_1.CreateClimatDto]),
    __metadata("design:returntype", void 0)
], ClimatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClimatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('moyenne'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClimatController.prototype, "findMoy", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClimatController.prototype, "findOne", null);
ClimatController = __decorate([
    (0, common_1.Controller)('climat'),
    __metadata("design:paramtypes", [climat_service_1.ClimatService])
], ClimatController);
exports.ClimatController = ClimatController;
//# sourceMappingURL=climat.controller.js.map