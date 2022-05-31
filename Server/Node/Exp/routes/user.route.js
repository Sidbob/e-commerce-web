import express from "express";
const router = express.Router();
import { Acregister, Edit, List, Login, Myprofile, SendEmail, SendEmail2 } from "../controller/user.controller";



// router.post('/register', Registers)

router.post('/acregister', Acregister)

// router.post('/send', SendEmail)

router.post('/login', Login)

router.post('/edit' , Edit)

router.post('/myprofile', Myprofile)

router.post('/list' , List)



// function isAuthorized(req, res, next) {
// 	if(req.headers && req.headers.authorization) {
// 		var parts = req.headers.authorization.split(" ");
//         if (parts.length == 2) {
//             var scheme = parts[0];
//             var credentials = parts[1];
//             var token = credentials
           
//             var decoded = jwt.verify(token, 'sidshopping');
// 			console.log(decoded, 'decoded');
// 			if(decoded && decoded.id) {
// 				req.user = decoded;
// 				next()
// 			} else {
// 				return res.json(401, { err: "Invalid token" });
// 			}
//         } else {
//             return res.json(401, { err: "Format is Authorization: Bearer [token]" });
//         }
// 	}else {
// 		return res.status(401).json({
// 			status: false,
// 			message: 'Authorization token is required'
// 		})
// 	}
// }

export default router;
