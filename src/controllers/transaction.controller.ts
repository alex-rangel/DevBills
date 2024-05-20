import { NextFunction, Request, Response } from "express";


import { StatusCodes } from "http-status-codes";
import { TransactionsService } from "../services/transactions.service";
import { createTransactionDTO } from "../dtos/transactions.dto";

export class TransactionsControllers {

    constructor(private transactionsService: TransactionsService) {}
    

    create = async (
        req: Request<unknown, unknown, createTransactionDTO>, 
        res: Response,
        next: NextFunction,
    ) => {
        try {

            const { title, amount, date, categoryId, type } = req.body;

            const result = await this.transactionsService.create({ title, amount, date, categoryId, type })

            return res.status(StatusCodes.CREATED).json(result)
        
        } catch (error) {
            next(error)
        }
    }
}