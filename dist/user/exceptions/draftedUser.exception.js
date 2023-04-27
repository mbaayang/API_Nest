"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftedUserException = void 0;
const common_1 = require("@nestjs/common");
class DraftedUserException extends common_1.HttpException {
    constructor() {
        super('Votre compte a été bloqué', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.DraftedUserException = DraftedUserException;
//# sourceMappingURL=draftedUser.exception.js.map