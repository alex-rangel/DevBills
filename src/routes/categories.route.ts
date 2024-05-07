import { Router } from "express";

import { CategoriesControllers } from "../controllers/category.contreller";

export const categoriesRoutes = Router()

const constroller = new CategoriesControllers()

categoriesRoutes.post('/', constroller.create)

