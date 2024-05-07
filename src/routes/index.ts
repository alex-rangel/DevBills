import { Router } from "express";

import { baseRouter } from "./base.route";
import { categoriesRoutes } from "./categories.route";

export const routes = Router();

routes.use('/', baseRouter);
routes.use('/categories', categoriesRoutes)