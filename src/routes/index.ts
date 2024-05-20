import { Router } from "express";

import { baseRouter } from "./base.route";
import { categoriesRoutes } from "./categories.route";
import { transactionsRoutes } from "./Transactions.route";

export const routes = Router();

routes.use('/', baseRouter);
routes.use('/categories', categoriesRoutes);
routes.use('/transactions', transactionsRoutes);