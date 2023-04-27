import { PlantesService } from 'src/plantes/plantes.service';
export declare class TasksService {
    private planteService;
    constructor(planteService: PlantesService);
    applySettings(): Promise<void>;
}
