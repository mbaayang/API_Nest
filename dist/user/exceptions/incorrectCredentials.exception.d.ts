import { HttpException } from '@nestjs/common';
export declare class IncorrectCredentialsException extends HttpException {
    constructor(message?: string);
}
