"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RfidDto = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
let RfidDto = class RfidDto extends (0, mapped_types_1.PickType)(create_user_dto_1.CreateUserDto, ['rfId']) {
};
RfidDto = __decorate([
    (0, mongoose_1.Schema)()
], RfidDto);
exports.RfidDto = RfidDto;
//# sourceMappingURL=rfid-user.dto.js.map