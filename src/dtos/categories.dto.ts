import { z } from "zod";


export const createCategorySchema = {
    title: z.string(),
    color: z.string().regex(/^#[A-Fa-f0-9]{6}$/)
}

const createCtegoryObject = z.object(createCategorySchema)
export type createCategoryDTO = z.infer<typeof createCtegoryObject>