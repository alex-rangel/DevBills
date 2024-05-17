import { Category } from "./category.entity";

export enum TransactionType{
    INCOME = 'income',
    EXPENSE = 'expense',
}

type TransactionsProps = {
    _id?: string,
    amount: number,
    date: Date,
    category: Category,
    type: TransactionType
}

export class Transaction {
    public _id?: string
    public amount: number
    public date: Date
    public category: Category
    public type: TransactionType

    constructor({_id,amount,category,date,type }:TransactionsProps) {
        this._id = _id
        this.amount = amount
        this.date = new Date(date)
        this.category = category
        this.type = type
    }
}