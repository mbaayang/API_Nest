import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Server } from 'ws';
import { AuthService } from './auth.service';
import { SchedulerRegistry } from '@nestjs/schedule';
export declare class AuthGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly authService;
    private schedulerRegistry;
    constructor(authService: AuthService, schedulerRegistry: SchedulerRegistry);
    private port;
    private parser;
    server: Server;
    handleArrosageOn(client: Socket, payload: string): any;
    handleArrosageOff(client: Socket, payload: string): any;
    handleToitOn(client: Socket, payload: string): any;
    handleToitOff(client: Socket, payload: string): any;
    checkPortStatus(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): any;
    handleDisconnect(client: any): any;
}
