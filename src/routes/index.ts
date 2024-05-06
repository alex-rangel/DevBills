import { Router } from "express";

import { baseRouter } from "./base.routes";

export const routes = Router();

routes.get('/', baseRouter);