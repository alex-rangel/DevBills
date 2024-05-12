import { CategoryRepository } from "../database/repositories/category.repository";
import { createdCategoryDto } from "../dtos/categories.dto";
import { Category } from "../entities/category.entity";

export class CategoriesService {
    constructor(private categoryRepository: CategoryRepository) {}

    async create({ title,color }: createdCategoryDto): Promise<Category> {
        const category = new Category({
            title,
            color,
        });

        const createdCategory = await this.categoryRepository.create(category)

        return createdCategory                              
    }
}