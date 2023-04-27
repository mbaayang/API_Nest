"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
class EmailAlreadyExistsException extends common_1.HttpException {
    constructor() {
        super('Cette adresse email est déja associé à un compte', common_1.HttpStatus.CONFLICT);
    }
}
exports.EmailAlreadyExistsException = EmailAlreadyExistsException;
//# sourceMappingURL=emailAlreadyExists.exception.js.map