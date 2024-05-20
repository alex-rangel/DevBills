import { Router } from "express";


import { ParamsType, validator } from "../middlewares/validator.middlewares";
import { createTransactionsSchema } from "../dtos/transactions.dto";
import { TransactionsControllers } from "../controllers/transaction.controller";
import { TransactionsFactory } from "../factories/transaction.factory";

export const transactionsRoutes = Router()

const controller = new TransactionsControllers(TransactionsFactory.getServiceInstance())

transactionsRoutes.post('/', validator({ schema: createTransactionsSchema, type: ParamsType.BODY
 }), controller.create )

