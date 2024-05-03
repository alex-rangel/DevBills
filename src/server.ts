import express, { json } from 'express'

const app = express()

app.use(json())

app.listen(3333, () => console.log('App id running at port 3333'))
