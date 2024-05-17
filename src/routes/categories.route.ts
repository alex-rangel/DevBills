import { Router } from "express";

import { CategoriesControllers } from "../controllers/category.controller";
import { ParamsType, validator } from "../middlewares/validator.middlewares";
import { createCategorySchema } from "../dtos/categories.dto";
import { CategoriesFactory } from "../factories/categories.factory";

export const categoriesRoutes = Router()

const controller = new CategoriesControllers(CategoriesFactory.getServiceInstance())

categoriesRoutes.get('/', controller.index)

categoriesRoutes.post('/', validator({ schema: createCategorySchema, type: ParamsType.BODY
 }), controller.create)

