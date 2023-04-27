"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlanteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_plante_dto_1 = require("./create-plante.dto");
class UpdatePlanteDto extends (0, mapped_types_1.PartialType)(create_plante_dto_1.CreatePlanteDto) {
}
exports.UpdatePlanteDto = UpdatePlanteDto;
//# sourceMappingURL=update-plante.dto.js.map