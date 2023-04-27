import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { LoginUserDto } from './dto/login-user.dto';
import { RfidDto } from './dto/rfid-user.dto';
export declare class UserService {
    private userRepository;
    private logger;
    constructor(userRepository: UserRepository);
    saltOrRounds: number;
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").UserDocument>;
    findAll(): Promise<import("./entities/user.entity").UserDocument[]>;
    findOne(id: string): Promise<import("./entities/user.entity").UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    remove(id: number): string;
    login(loginUserDto: LoginUserDto): Promise<{
        email: string;
        id: any;
        nom: string;
        prenom: string;
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
    }>;
}
