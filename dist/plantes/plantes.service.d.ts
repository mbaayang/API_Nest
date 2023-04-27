/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreatePlanteDto } from './dto/create-plante.dto';
import { UpdatePlanteDto } from './dto/update-plante.dto';
import { Plante, PlanteDocument } from './entities/plante.entity';
export declare class PlantesService {
    private PlanteModel;
    constructor(PlanteModel: Model<PlanteDocument>);
    create(CreatePlanteDto: CreatePlanteDto): Promise<import("mongoose").Document<unknown, {}, PlanteDocument> & Omit<Plante & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, PlanteDocument> & Omit<Plante & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[], import("mongoose").Document<unknown, {}, PlanteDocument> & Omit<Plante & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, PlanteDocument>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, PlanteDocument> & Omit<Plante & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findActive(): Promise<(import("mongoose").Document<unknown, {}, PlanteDocument> & Omit<Plante & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    update(id: string, UpdatePlanteDto: UpdatePlanteDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, PlanteDocument> & Omit<Plante & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, PlanteDocument> & Omit<Plante & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, PlanteDocument>;
}
