import { NextFunction, Request, Response } from "express";


import { StatusCodes } from "http-status-codes";
import { TransactionsService } from "../services/transactions.service";
import { createTransactionDTO, getDashboardDTO, indexTransactionsDTO } from "../dtos/transactions.dto";

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

    index = async (
        req: Request<unknown, unknown,unknown, indexTransactionsDTO>, 
        res: Response,
        next: NextFunction,
        ) => {
        try {

            const { title, categoryId, beginDate, endDate } = req.query

            const result = await this.transactionsService.index({ 
                title, 
                categoryId, 
                beginDate, 
                endDate 
            })

            return res.status(StatusCodes.OK).json(result)
        
        } catch (error) {
            next(error)
        }
    }

    getDashboard = async (
        req: Request<unknown, unknown,unknown, getDashboardDTO>, 
        res: Response,
        next: NextFunction,
        ) => {
        try {

            const { beginDate, endDate } = req.query

            const result = await this.transactionsService.getDashbord({  
                beginDate, 
                endDate
            })

            return res.status(StatusCodes.OK).json(result)
        
        } catch (error) {
            next(error)
        }
    }
}