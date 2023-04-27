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
import { CreateClimatDto } from './dto/create-climat.dto';
import { Climat, ClimatDocument } from './entities/climat.entity';
import { OnGatewayConnection } from '@nestjs/websockets';
import * as socketio from 'socket.io';
export declare class ClimatService implements OnGatewayConnection {
    private ClimatSchema;
    private port;
    private parser;
    constructor(ClimatSchema: Model<ClimatDocument>);
    handleConnection(client: socketio.Socket, ...args: any[]): Promise<void>;
    aggregateValues(): Promise<any>;
    create(createClimatDto: CreateClimatDto): Promise<import("mongoose").Document<unknown, {}, ClimatDocument> & Omit<Climat & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, ClimatDocument> & Omit<Climat & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, ClimatDocument> & Omit<Climat & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
