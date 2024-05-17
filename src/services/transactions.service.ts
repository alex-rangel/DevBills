import { TransactionsRepository } from "../database/repositories/transactions.repository";
import { createCategoryDTO } from "../dtos/categories.dto";
import { createTransactionDTO } from "../dtos/transactions.dto";
import { Transaction } from "../entities/transaction.entity";

export class TranctionsServica {
    constructor(private transactionsRepository: TransactionsRepository) {}

    async create({}: createTransactionDTO) {}
}