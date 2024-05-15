import { NextFunction, Request, Response } from "express";
import { z } from 'zod'

import { CategoryRepository } from "../database/repositories/category.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoriesService } from "../services/category.sevice";
import { createCategoryDTO } from "../dtos/categories.dto";
import { StatusCodes } from "http-status-codes";

export class CategoriesControllers {
    async create(
        req: Request<unknown, unknown, createCategoryDTO>, 
        res: Response,
        next: NextFunction,
    ) {
        try {

            const { title, color } = req.body;

            const repository = new CategoryRepository(CategoryModel)
            const service =  new CategoriesService(repository)

            const result = await service.create({ title, color })

            return res.status(StatusCodes.CREATED).json(result)
        
        } catch (error) {
            next(error)
        }
    }

    async index(
        req: Request, 
        res: Response,
        next: NextFunction,
    ) {
        try {

            const repository = new CategoryRepository(CategoryModel)
            const service =  new CategoriesService(repository)

            const result = await service.index()

            return res.status(StatusCodes.OK).json(result)
        
        } catch (error) {
            next(error)
        }
    }
}