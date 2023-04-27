import { ConsoleLogger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { RfidDto } from '../user/dto/rfid-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    logger: ConsoleLogger;
    constructor(userService: UserService, jwtService: JwtService);
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
    loginRfid(rfidDto: RfidDto): Promise<{
        error: boolean;
        message: string;
        code: number;
        email?: undefined;
        id?: undefined;
        nom?: undefined;
        prenom?: undefined;
    } | {
        email: string;
        id: any;
        nom: string;
        prenom: string;
        error?: undefined;
        message?: undefined;
        code?: undefined;
    } | {
        access_token: string;
    }>;
}
