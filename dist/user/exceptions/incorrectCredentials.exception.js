"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncorrectCredentialsException = void 0;
const common_1 = require("@nestjs/common");
class IncorrectCredentialsException extends common_1.HttpException {
    constructor(message = 'Email ou mot de passe incorrect') {
        super(message, common_1.HttpStatus.FORBIDDEN);
    }
}
exports.IncorrectCredentialsException = IncorrectCredentialsException;
//# sourceMappingURL=incorrectCredentials.exception.js.map