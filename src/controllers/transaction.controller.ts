import { NextFunction, Request, Response } from "express";


import { StatusCodes } from "http-status-codes";
import { TransactionsService } from "../services/transactions.service";
import { createTransactionDTO, getDashboardDTO, getFinancialEvolutionDTO, indexTransactionsDTO } from "../dtos/transactions.dto";
import { BodyRequest, QueryRequest } from "./types";

export class TransactionsControllers {

    constructor(private transactionsService: TransactionsService) {}
    

    create = async (
        req: BodyRequest<createTransactionDTO>, 
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
        req: QueryRequest<indexTransactionsDTO>, 
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
        req: QueryRequest<getDashboardDTO>, 
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

    getFinancialEvolution = async (
        req: QueryRequest<getFinancialEvolutionDTO>, 
        res: Response,
        next: NextFunction,
        ) => {
        try {

            const { year } = req.query

            const result = await this.transactionsService.getFinancialEvolution({  
                year
            })

            return res.status(StatusCodes.OK).json(result)
        
        } catch (error) {
            next(error)
        }
    }
}