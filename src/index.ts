import express from 'express'
import { router } from './routes/pmcrouter'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/test", router)
app.listen(5000, () => {
    console.log("App started listening...")
})
