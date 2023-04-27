import { AuthService } from './auth.service';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { User } from '../user/entities/user.entity';
type RequestWithUser = Request & {
    user: Partial<User>;
};
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
    profile(request: RequestWithUser): Partial<User>;
}
export {};
