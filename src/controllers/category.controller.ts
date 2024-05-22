import { NextFunction, Request, Response } from "express";

import { CategoriesService } from "../services/category.sevice";
import { createCategoryDTO } from "../dtos/categories.dto";
import { StatusCodes } from "http-status-codes";
import { BodyRequest } from "./types";

export class CategoriesControllers {

    constructor(private categoriesService: CategoriesService) {}

    create = async (
        req: BodyRequest<createCategoryDTO>, 
        res: Response,
        next: NextFunction,
    ) => {
        try {

            const { title, color } = req.body;

            const result = await this.categoriesService.create({ title, color })

            return res.status(StatusCodes.CREATED).json(result)
        
        } catch (error) {
            next(error)
        }
    }

    index = async (
        _: Request, 
        res: Response,
        next: NextFunction,
    ) => {
        try {

            const result = await this.categoriesService.index()

            return res.status(StatusCodes.OK).json(result)
        
        } catch (error) {
            next(error)
        }
    }
}