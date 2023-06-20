import express, { Request, Response, Application } from 'express'
const app: Application = express();
const PORT = 8000

app.get("/", (req: Request, res: Response): void => {
    res.end("Express works!")
})

app.listen(PORT, () => console.log("App started listening"))
