"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRfidCardException = void 0;
const common_1 = require("@nestjs/common");
class BadRfidCardException extends common_1.HttpException {
    constructor() {
        super('Accés non autorisé', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.BadRfidCardException = BadRfidCardException;
//# sourceMappingURL=BadRfidCard.exception.js.map