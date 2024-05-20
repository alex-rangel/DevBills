import { Transaction } from "../../entities/transaction.entity";
import { TransactionModel } from "../schemas/transactions.schema"; 

export class TransactionsRepository {
    constructor(private model: typeof TransactionModel) {}

    async  create({title, date, amount, type, category}: Transaction): Promise<Transaction> {
        const createdTransaction = await this.model.create({
            title,
            date,
            amount,
            type,
            category
        });

        return createdTransaction.toObject<Transaction>()
    }
}