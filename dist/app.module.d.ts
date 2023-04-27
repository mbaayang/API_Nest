import { OnModuleInit } from '@nestjs/common';
import { TasksService } from './tasks/tasks.service';
export declare class AppModule implements OnModuleInit {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    onModuleInit(): Promise<void>;
}
