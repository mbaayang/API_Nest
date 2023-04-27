import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").UserDocument>;
    findAll(): Promise<import("./entities/user.entity").UserDocument[]>;
    findOne(id: string): Promise<import("./entities/user.entity").UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    remove(id: string): string;
}
