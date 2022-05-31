import express from "express";
import { ADDproduct, DeleteProduct, ListProduct,ListProduct2, SendEmail2, SortAllproducts, UpdateProduct } from "../controller/product.controller";
const router = express.Router();

router.post('/add', ADDproduct)

router.delete('/delete/:id', DeleteProduct)

router.post('/edit', UpdateProduct)

router.post('/list',ListProduct)

router.post('/list2/:id',ListProduct2)

router.post('/sort',SortAllproducts)

router.post('/sendemail',SendEmail2)


export default router;  