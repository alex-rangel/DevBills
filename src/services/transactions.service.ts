import { CategoryRepository } from "../database/repositories/category.repository";
import { TransactionsRepository } from "../database/repositories/transactions.repository";
import { createTransactionDTO } from "../dtos/transactions.dto";
import { Transaction } from "../entities/transaction.entity";
import { AppError } from "../errors/app.error";
import { StatusCodes } from "http-status-codes";

export class TransactionsService {
    constructor(
        private transactionsRepository: TransactionsRepository,
        private categoriesRepository: CategoryRepository,
    ) {}

    async create({title,date,type,categoryId,amount}: createTransactionDTO): Promise<Transaction> {
        // precisa validar se a categoria existe
        const category = await this.categoriesRepository.findById(categoryId)

        if (!category) {
            throw new AppError('Category does not exists', StatusCodes.NOT_FOUND)
        }

        const transaction = new Transaction({
            title,
            type,
            amount,
            category,
            date,
        })

        const crearedTransaction = await this.transactionsRepository.create(transaction)

        return crearedTransaction
    }
}