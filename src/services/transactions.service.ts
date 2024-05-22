import { CategoryRepository } from "../database/repositories/category.repository";
import { TransactionsRepository } from "../database/repositories/transactions.repository";
import { createTransactionDTO, getDashboardDTO, indexTransactionsDTO } from "../dtos/transactions.dto";
import { Balance } from "../entities/balance.entity";
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

    async index(filters: indexTransactionsDTO): Promise<Transaction[]> {
        const categories = await this.transactionsRepository.index(filters)

        return categories
    }

    async getDashbord({ beginDate, endDate }: getDashboardDTO): Promise<Balance> {
        let balance = await this.transactionsRepository.getBalance({
            beginDate,
            endDate,
        })

        if (!balance) {
            balance = new Balance({
                _id: null,
                incomes: 0,
                expenses: 0,
                balance: 0,
            })
        }

        return balance
    }
}