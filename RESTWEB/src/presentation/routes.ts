
//si es usa inyeccion de dependencias se crea instancia

import { Router } from "express";
import { TodosController } from "./todos/controller";
import { TodoRoutes } from "./todos/routes";

//sino se usa Class
export class Approutes{

    static get routes():Router{
        const router = Router();

        
        router.use('/api/todos',TodoRoutes.routes);

        return router;
    }
}