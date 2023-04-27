"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRepository = void 0;
class EntityRepository {
    constructor(entityModel) {
        this.entityModel = entityModel;
    }
    async findOne(entityFilterQuery, projection) {
        return this.entityModel
            .findOne(entityFilterQuery, Object.assign({ _id: 0, __v: 0 }, projection))
            .exec();
    }
    async find(entityFilterQuery, projection) {
        return this.entityModel.find(entityFilterQuery, Object.assign({}, projection));
    }
    async create(createEntityData) {
        const entity = new this.entityModel(createEntityData);
        return entity.save();
    }
    async findOneAndUpdate(entityFilterQuery, updateEntityData) {
        return this.entityModel.findOneAndUpdate(entityFilterQuery, updateEntityData, {
            new: true,
        });
    }
    async deleteMany(entityFilterQuery) {
        const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);
        return deleteResult.deletedCount >= 1;
    }
}
exports.EntityRepository = EntityRepository;
//# sourceMappingURL=entity.repository.js.map