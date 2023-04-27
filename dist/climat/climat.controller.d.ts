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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ClimatService } from './climat.service';
import { CreateClimatDto } from './dto/create-climat.dto';
export declare class ClimatController {
    private readonly climatService;
    constructor(climatService: ClimatService);
    create(createClimatDto: CreateClimatDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/climat.entity").ClimatDocument> & Omit<import("./entities/climat.entity").Climat & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/climat.entity").ClimatDocument> & Omit<import("./entities/climat.entity").Climat & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findMoy(): Promise<any>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/climat.entity").ClimatDocument> & Omit<import("./entities/climat.entity").Climat & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
