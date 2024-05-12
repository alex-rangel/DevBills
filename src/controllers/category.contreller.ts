import { NextFunction, Request, Response } from "express";

import { CategoryRepository } from "../database/repositories/category.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoriesService } from "../services/category.sevice";
import { createdCategoryDto } from "../dtos/categories.dto";

export class CategoriesControllers {
    async create(
        req: Request<unknown, unknown, createdCategoryDto>, 
        res: Response,
        next: NextFunction,
    ) {
        try {

            const { title, color } = req.body;

            const repository = new CategoryRepository(CategoryModel)
            const service =  new CategoriesService(repository)

            const result = await service.create({ title, color })

            return res.status(201).json(result)
        
        } catch (error) {
            next(error)
        }
    }
}