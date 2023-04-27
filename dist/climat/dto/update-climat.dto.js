"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClimatDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_climat_dto_1 = require("./create-climat.dto");
class UpdateClimatDto extends (0, mapped_types_1.PartialType)(create_climat_dto_1.CreateClimatDto) {
}
exports.UpdateClimatDto = UpdateClimatDto;
//# sourceMappingURL=update-climat.dto.js.map