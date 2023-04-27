import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
export declare abstract class EntityRepository<T extends Document> {
    protected readonly entityModel: Model<T>;
    constructor(entityModel: Model<T>);
    findOne(entityFilterQuery: FilterQuery<T>, projection?: Record<string, unknown>): Promise<T | null>;
    find(entityFilterQuery: FilterQuery<T>, projection?: Record<string, unknown>): Promise<T[] | null>;
    create<CreaTeEntityDataType>(createEntityData: CreaTeEntityDataType): Promise<T>;
    findOneAndUpdate(entityFilterQuery: FilterQuery<T>, updateEntityData: UpdateQuery<unknown>): Promise<T | null>;
    deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean>;
}
