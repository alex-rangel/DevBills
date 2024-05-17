import { z } from "zod";

import { TransactionType } from "../entities/transaction.entity";

export  const createTransactionsSchema = {
    title: z.string(),
    amount: z.number().int().positive(),
    type: z.nativeEnum(TransactionType),
    date: z.coerce.date(),
    categoryId: z.string(),
}

const createTransactionObject = z.object(createTransactionsSchema)
export type createTransactionDTO = z.infer<typeof createTransactionObject>