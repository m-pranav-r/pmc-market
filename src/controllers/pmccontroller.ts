import { Request, Response } from 'express'
import mysql from 'mysql'

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "pmcdb"
})
connection.connect()

export const getBases = ((req: Request, res: Response) => {
    connection.query("SELECT * FROM pmctest", (err, rows, fields) => {
        let queryData: Array<typeof rows> = []
        if (err) {
            throw err
        }
        for (var row of rows) {
            queryData.push(row)
        }
        res.status(200).json(queryData)
    })
})

export const getBaseData = ((req: Request, res: Response) => {
    let { testid } = req.params
    connection.query(`SELECT * FROM pmctest WHERE t2 = ${testid}`, (err, rows, fields) => {
        let queryData: Array<typeof rows> = []
        if (err) {
            throw err
        }
        for (var row of rows) {
            queryData.push(row)
        }
        res.status(200).json(queryData)
    })
})

export const addBase = ((req: Request, res: Response) => {
    const reqBody = req.body
    console.log(reqBody ?? "No body!")
    connection.query(`INSERT INTO pmctest (t1, t2) VALUES("${reqBody.t1}", ${reqBody.t2})`, (err, result) => {
        if (err) {
            throw err
        }
        res.status(200).send("Cool")
    })
})

export const removeBase = ((req: Request, res: Response) => {
    let { testid } = req.params
    connection.query(`DELETE FROM pmctest WHERE t2 = ${testid}`, (err, result) => {
        if (err) {
            throw err
        }
        res.status(200).send("Okay")
    })
})