"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class UserNotFoundException extends common_1.HttpException {
    constructor(message = 'Ce compte est inexistant') {
        super(message, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.UserNotFoundException = UserNotFoundException;
//# sourceMappingURL=userNotFound.exception.js.map