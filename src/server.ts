import express from 'express'
import { router } from './routes/pmcrouter'

const app = express()

export const initServer = function () {
    app.use(express.json())
    app.use("/api/test", router)
    app.listen(5000, () => {
        console.log("App started listening...")
    })
}