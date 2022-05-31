import express from "express";
import { ADDnew, Deletesubcat, Listsubcat, Updatesubcat } from "../controller/sub_category.controller";
const router = express.Router();



router.post('/add', ADDnew)

router.delete('/delete', Deletesubcat)

router.post('/edit', Updatesubcat)

router.post('/List', Listsubcat )







export default router;