import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
export declare class SerialService {
    private port;
    private parser;
    getPort(): SerialPort<import("@serialport/bindings-cpp").AutoDetectTypes>;
    openPort(): void;
    getParser(): ReadlineParser;
    writeToPort(data: any): void;
}
declare const serialService: Readonly<SerialService>;
export { serialService };
