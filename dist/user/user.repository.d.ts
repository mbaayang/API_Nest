import { EntityRepository } from '../database/entity.repository';
import { UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
export declare class UserRepository extends EntityRepository<UserDocument> {
    constructor(userModel: Model<UserDocument>);
}
