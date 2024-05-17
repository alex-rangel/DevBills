import { Transaction } from "../../entities/transaction.entity";
import { TransactionModel } from "../schemas/transactions.schema"; 

export class TransactionsRepository {
    constructor(private model: typeof TransactionModel) {}

    async  create({title, date, amount, type, category}: Transaction): Promise<Transaction> {
        const createdTransaction = await this.model.create({});

        return createdTransaction.toObject<Transaction>()
    }

    async index(): Promise<Transaction[]> {
        const transaction = await this.model.find()

        const transactionMap = transaction.map((item) => item.toObject<Transaction>())

        return transactionMap
    }
}