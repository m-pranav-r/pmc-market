import { Router } from 'express'
import { getBases, getBaseData, removeBase, addBase } from '../controllers/pmccontroller'
export const router = Router()

router.get("/", getBases)

router.get("/:testid", getBaseData)

router.post("/", addBase)

router.delete("/:testid", removeBase)
