import { Router } from "express";

import { CategoriesControllers } from "../controllers/category.contreller";
import { ParamsType, validator } from "../middlewares/validator.middlewares";
import { createCategorySchema } from "../dtos/categories.dto";

export const categoriesRoutes = Router()

const constroller = new CategoriesControllers()

categoriesRoutes.post('/', validator({ schema: createCategorySchema, type: ParamsType.BODY
 }), constroller.create)

