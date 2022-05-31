import express from "express";
import { Addrole, Deleterole, Updaterole } from "../controller/userrole.controller";
const router =  express.Router();

router.post('/addrole' , Addrole)

router.post('/delete' , Deleterole)

router.post('/update' , Updaterole)


export default router;