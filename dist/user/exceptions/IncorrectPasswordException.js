"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncorrectPasswordException = void 0;
const common_1 = require("@nestjs/common");
class IncorrectPasswordException extends common_1.HttpException {
    constructor() {
        super('Ancien mot de passe incorrect', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.IncorrectPasswordException = IncorrectPasswordException;
//# sourceMappingURL=IncorrectPasswordException.js.map