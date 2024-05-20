import { CategoryRepository } from "../database/repositories/category.repository"
import { TransactionsRepository } from "../database/repositories/transactions.repository"
import { CategoryModel } from "../database/schemas/category.schema"
import { TransactionModel } from "../database/schemas/transactions.schema"
import { TransactionsService } from "../services/transactions.service"


export class TransactionsFactory {
    private static trasactionsService: TransactionsService

    static getServiceInstance() {
        if (this.trasactionsService) {
            return this.trasactionsService
        }

        const repository = new TransactionsRepository(TransactionModel)
        const categoriesRepository = new CategoryRepository(CategoryModel)
        const service = new TransactionsService(repository, categoriesRepository)

        this.trasactionsService = service

        return service
    }
}