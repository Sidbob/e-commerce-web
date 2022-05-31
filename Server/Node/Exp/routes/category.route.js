import express from "express";
const router = express.Router();
import { Add, Delete, List, Update } from "../controller/category.controll";

router.post('/add', Add)

router.delete('/delete', Delete)

router.post('/edit', Update)

router.post('/list',List)




export default router;