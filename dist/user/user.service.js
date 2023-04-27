"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const bcrypt = require("bcrypt");
const incorrectCredentials_exception_1 = require("./exceptions/incorrectCredentials.exception");
const userNotFound_exception_1 = require("./exceptions/userNotFound.exception");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.logger = new common_1.ConsoleLogger();
        this.saltOrRounds = 10;
    }
    async create(createUserDto) {
        createUserDto.password = await bcrypt.hash(createUserDto.password, this.saltOrRounds);
        return this.userRepository.create(createUserDto);
    }
    findAll() {
        return this.userRepository.find({});
    }
    findOne(id) {
        return this.userRepository.findOne({ _id: id });
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.findOne({ email: id });
        if (!user) {
            throw new userNotFound_exception_1.UserNotFoundException('Erreur lors de la modification');
        }
        const isPasswordCorrect = await bcrypt.compare(updateUserDto.password, user.password);
        if (!isPasswordCorrect) {
            throw new incorrectCredentials_exception_1.IncorrectCredentialsException('Ancien mot de passe incorrect');
        }
        updateUserDto.newPassword = await bcrypt.hash(updateUserDto.newPassword, this.saltOrRounds);
        const newUser = await this.userRepository.findOneAndUpdate({ email: id }, { password: updateUserDto.newPassword });
        if (!newUser) {
            throw new userNotFound_exception_1.UserNotFoundException('Erreur lors de la modification');
        }
        return { status: 200, message: 'Mot de passe modifié avec succès' };
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    async login(loginUserDto) {
        const user = await this.userRepository.findOne({
            email: loginUserDto.email,
        });
        if (!user) {
            throw new userNotFound_exception_1.UserNotFoundException();
        }
        const isPasswordCorrect = await bcrypt.compare(loginUserDto.password, user.password);
        if (!isPasswordCorrect) {
            throw new incorrectCredentials_exception_1.IncorrectCredentialsException();
        }
        return {
            email: user.email,
            id: user._id,
            nom: user.nom,
            prenom: user.prenom,
        };
    }
    async loginRfid(rfidDto) {
        const user = await this.userRepository.findOne({ rfId: rfidDto.rfId });
        if (!user) {
            return {
                error: true,
                message: 'Accés non autorisé',
                code: 400,
            };
        }
        return {
            email: user.email,
            id: user._id,
            nom: user.nom,
            prenom: user.prenom,
        };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map