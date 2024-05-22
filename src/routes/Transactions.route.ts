import { Router } from "express";


import { ParamsType, validator } from "../middlewares/validator.middlewares";
import { createTransactionsSchema, getDashboardShema, indexTransactionsSchema } from "../dtos/transactions.dto";
import { TransactionsControllers } from "../controllers/transaction.controller";
import { TransactionsFactory } from "../factories/transaction.factory";

export const transactionsRoutes = Router()

const controller = new TransactionsControllers(TransactionsFactory.getServiceInstance())

transactionsRoutes.get(
    '/',
    validator({
        schema: indexTransactionsSchema, 
        type: ParamsType.QUERY
    }), 
    controller.index
)

transactionsRoutes.get(
        '/dashboard', 
    validator({
        schema: getDashboardShema, 
        type: ParamsType.QUERY
    }), 
    controller.getDashboard
)

transactionsRoutes.post(
        '/', 
        validator({ 
            schema: createTransactionsSchema, 
            type: ParamsType.BODY
    }), 
    controller.create 
)


