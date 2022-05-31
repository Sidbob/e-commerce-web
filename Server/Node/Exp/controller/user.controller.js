import User from "../model/user.model";
import nodemailer from "nodemailer"
import { jwt } from "jsonwebtoken";


// ---------------------Register-----------------------------

// const storage = multer.diskStorage({
//     destination: (req, file, callback) =>{
//         callback(null,'public')
//     },
//     filename: (req,file,callback) => {
//         callback(null, file.fieldname + '_' + Date.now() + '.jpg')
//     }
// })


// export const Registers = async (req, res) => {

//     // const uploadImage = multer({storage: storage}).single('myImage');

//     // uploadImage(req,res, async function (err){
//     //     console.log(req.file,req.body)


//     const { name, email, contact_number, password } = req.body;
//     console.log(req.body.Role_id)
//     if (!name) {
//         res.status(422).json({
//             status: false,
//             message: "name is require"
//         })
//     }
//     if (!email) {
//         res.status(422).json({
//             status: false,
//             message: "Email is require"
//         })
//     }
//     if (!contact_number) {
//         res.status(422).json({
//             status: false,
//             message: "contact_number is require"
//         })
//     }
//     if (!password) {
//         res.status(422).json({
//             status: false,
//             message: "password is require"
//         })
//     }

//     // if (!Role_id) {
//     //     res.status(422).json({
//     //         status: false,
//     //         message: "Role is require"
//     //     })
//     // }

//     let userData = { name: name, email: email, contact_number: contact_number, password: password };
//     // let userData = { name:name, email:email, contact_number:contact_number, password:password };

//     User.create(userData, function (err, data) {
//         console.log(data)
//         if (err) {
//             return res.status(500).json({
//                 status: false,
//                 massage: 'Something went wrong'
//             })
//         }
//         return res.status(200).json({
//             status: true,
//             massage: "Success",
//             data: data
//         });
//     })
//     // });
// }
// -----------------------------------------------------------------------------------------------------------

export const Acregister = (req, res) => {
    const { name, email, contact_number, password } = req.body
    if (!name) {
        res.status(422).json({
            status: false,
            message: "name is require"
        })
    }
    if (!email) {
        res.status(422).json({
            status: false,
            message: "email is require"
        })
    }
    if (!contact_number) {
        res.status(422).json({
            status: false,
            message: "contact_number is require"
        })
    }
    if (!password) {
        res.status(422).json({
            status: false,
            message: "password is require"
        })
    }


    let ACData = { name: name, email: email, contact_number: contact_number, password: password }

    User.create(ACData, function (err, data) {
        if (err) {
            res.status(500).json({
                status: false,
                massage: 'Something went wrong'
            })
        }
        return res.status(200).json({
            status: true,
            massage: "Success",
            data: data
        })
    })
}




// --------------------------Login--------------------------


export const Login = async (req, res) => {
    const { email, password } = req.body

    if (!email) {
        return res.status(422).json({
            status: false,
            massage: "email is require"
        })
    }
    if (!password) {
        return res.status(422).json({
            status: false,
            massage: "password is require"
        })
    }

    let user = await User.findOne({ email: email, password: password });



    if (!user) {
        res.status(422).json({
            status: false,
            massage: "Invalid credentials"
        });
    }

    if (user && user._id) {
        // let token = jwt.sign({ id: user._id }, 'sidshopping')
        // console.log(token)
        res.status(200).json({
            status: true,
            massage: "Logged in Successfully.",
            data: user,
            // token: token,
        });
    }

}


// ----------------------- Edit ----------------------------

export const Edit = (req, res) => {
    if (req.body.email) {
        return res.status(500).json({
            message: "Cannot update Email",
            status: false
        });
    }
    User.findByIdAndUpdate(req.body.id, req.body, (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Something went wrong",
                status: false
            });
        }


        if (data) {
            return res.status(200).json({
                status: true,
                massage: "MyProfile",
                data: data
            })
        }
    })
}








//  ---------------------------Myprofile-----------------------


export const Myprofile = (req, res) => {

    const some = { email: req.body.email }

    User.find(some, function (err, data) {
        if (err) {
            return res.status(500).json({
                message: "Something went wrong",
                status: false
            });
        }
        if (data) {
            return res.status(200).json({
                status: true,
                massage: "MyProfile",
                data: data
            })
        }
    });
}


//  ---------------------------List-----------------------



export const List = (req, res) => {

    const { Role_id } = req.body

    if (!Role_id) {
        res.status(422).json({
            status: false,
            message: "Role_id is require"
        })
    }
    let Data = { Role_id: Role_id }
    User.find(Data, function (err, data) {
        if (err) {
            return res.status(422).json({
                massage: "Something went worng",
                status: false
            });
        }
        else {
            return res.status(200).json({
                massage: "Request successfully done",
                status: true,
                data: data
            });
        }
    })
}


/////////////////////////////// [ nodemailer ] ///////////////////////////////////////


// var nodemailer = require ('nodemailer')

var transport = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'daddu.tamhankar01@gmail.com',
            pass: 'Siddhu@5646'
        }
    }
)

// send out email through nodemailer

// var mailOption = {
//     Form: 'daddu.tamhankar01@gmail.com',
//     to: 'siddheshtamhankar4@gmail.com' ,
//     subject: 'hello send email using nodemailer',
//     text: 'This is the body of the mail'
// }

// export const SendEmail = (req, res) => {
//     transport.sendMail(mailOption, function (err, data) {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log("Email send" + data.response)
//         }
//     })

// }





// export const SendEmail2 = (req, res) => {

//     // var transport = nodemailer.createTransport(
//     //         {
//     //             service: 'gmail',
//     //             auth: {
//     //                 user: 'daddu.tamhankar01@gmail.com',
//     //                 pass: 'Siddhu@5646'
//     //             }
//     //         }
//     //     )
        
//     //     var mailOption = {
//     //             Form: 'daddu.tamhanakar01@gmail.com',
//     //             to: req.body.to,
//     //             subject: req.body.subject,
//     //             text: req.body.description,
//     //             html:`
//     //             <div style="padding:10px; border-style: ridge">
//     //             <h3>Email: ${req.body.to}</h3>
//     //             <h3>subject: ${req.body.subject}</h3>
//     //             <h3>Message: ${req.body.description}</h3>
//     //             </div>
//     //             `
//     //         }

//     //     transport.sendMail(mailOption, function (err, data) {
//     //         if (err) {
//     //             console.log(err)

//     //             return res.json({status:true,respMesg:"Error in the Code"})
//     //         }
//     //         else {

//     //             console.log("Email send" + data.response)

//     //             return res.json({status:true,respMesg:" Email Send Successfully"})

//     //         }
//     //     });
    
//     }