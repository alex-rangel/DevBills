import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'

import { setupMongo } from './database'
import { routes } from './routes'
import { errorHandler } from './middlewares/error-handler.middlewares'

setupMongo().then(() => {
    const app = express()

    app.use(cors({
        origin: process.env.FRONT_URL,
    }))
    //console.log(process.env.FRONT_URL)
    app.use(json())
    app.use(routes)
    app.use(errorHandler)

    app.listen(3333, () => console.log('App id running at port 3333'))
})

