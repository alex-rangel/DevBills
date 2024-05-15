import { Router } from "express";

import { CategoriesControllers } from "../controllers/category.controller";
import { ParamsType, validator } from "../middlewares/validator.middlewares";
import { createCategorySchema } from "../dtos/categories.dto";

export const categoriesRoutes = Router()

const controller = new CategoriesControllers()

categoriesRoutes.get('/', controller.index)

categoriesRoutes.post('/', validator({ schema: createCategorySchema, type: ParamsType.BODY
 }), controller.create)

