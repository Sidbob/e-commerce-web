import Product from "../model/product.model";
import multer from "multer";
import nodemailer from "nodemailer"


// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, 'public')
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, file.fieldname + '-' + Date.now() + ".jpg")
//     }
// })


// ---------------------( Add  Product )------------------------------


export const ADDproduct = async (req, res) => {

    // const uploadImages = multer({ storage: storage }).single('myImage');


    // uploadImages(req, res, async function (err) {
    // console.log(req.file.filename)

    const { Subcategory_id, Category_id, ProductName, Description, Price, short_desp, ImageFile } = req.body


    if (!Subcategory_id) {
        return res.status(422).json({
            status: false,
            message: " Subcategory_id is require"
        })
    }
    if (!Category_id) {
        return res.status(422).json({
            status: false,
            message: " Category_id is require"
        })
    }
    if (!ProductName) {
        return res.status(422).json({
            status: false,
            message: " ProductName is require"
        })
    }
    if (!Description) {
        return res.status(422).json({
            status: false,
            message: " Description id is require"
        })
    }
    if (!short_desp) {
        return res.status(422).json({
            status: false,
            message: " short_desp is require"
        })
    }
    if (!Price) {
        return res.status(422).json({
            status: false,
            message: " Price is require"
        })
    }
    if (!ImageFile) {
        return res.status(422).json({
            status: false,
            message: " ImageFile is require"
        })
    }


    if (Subcategory_id && Category_id) {

        let Data = {
            Subcategory_id: Subcategory_id,
            Category_id: Category_id,
            ProductName: ProductName,
            Description: Description,
            Price: Price,
            short_desp: short_desp,
            ImageFile: ImageFile,
        }
        // ImageFile: req.file.path,


        let newData = await Product.create(Data);
        console.log(newData)
        try {
            return res.status(200).json({
                message: " created successfully",
                status: true,
                data: newData
            });
        }
        catch{
            return res.status(422).json({
                        status: false,
                        message: "Category not exist",
                        
                    })
        }
    }

        // if (err) {
        //     return res.status(200).json({
        //         message: " created successfully",
        //         status: true,
        //         data: newData
        //     });
        // }
        // else {
        //     return res.status(422).json({
        //         status: false,
        //         message: "Category not exist"
        //     })
        // }

    }


    // ---------------------( Delete Product )------------------------------


    export const DeleteProduct = (req, res) => {
        Product.findByIdAndDelete(req.params.id, function (err, data) {
            if (err) {
                return res.status(422).json({
                    status: false,
                    message: "invalid request"
                });
            }

            if (data) {
                return res.status(200).json({
                    status: true,
                    message: " Deleted successfully",
                    data: data
                });
            }
        });
    }


    // ---------------------( Edit Product )-------------------------------


    export const UpdateProduct = (req, res) => {
        Product.findByIdAndUpdate(req.body.id, req.body, function (err, data) {
            if (err) {
                return res.status(422).json({
                    status: false,
                    message: "something went worng"
                });
            }

            if (data) {
                return res.status(200).json({
                    status: true,
                    message: " update data successfully",
                    data: data
                });
            }
        });
    }


    // ---------------------( List Product  )--------------------------------


    export const ListProduct = (req, res) => {
        Product.find({}, function (err, data) {
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
        });
    }



    export const ListProduct2 = (req, res) => {
        Product.findById(req.params.id, function (err, data) {
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
        });
    }



    // -------------------------- Sort ---------------------------


    export const SortAllproducts = async (req, res) => {
        const sort = { Price: 1 }
        const productDetails = await Product.find().sort(sort)

        return res.status(200).json({
            massage: "success",
            status: true,
            data: productDetails
        });
    }


    // ----------------------------filter----------------------------


    export const FilterAllproduct = async (req, res) => {
        const productdetail = await Product.find({ "price": { "$gte": 9000 } })


        return res.status(200).json({
            message: "success",
            status: true,
            data: productdetail
        });
    }


    // ----------------------------------- node Mailer -------------------

    export const SendEmail2 = (req, res) => {

        var transport = nodemailer.createTransport(
            {
                service: 'gmail',
                auth: {
                    user: 'daddu.tamhankar01@gmail.com',
                    pass: 'Siddhu@5646'
                }
            }
        )

        var mailOption = {
            Form: 'daddu.tamhanakar01@gmail.com',
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.description,
            html: `
                    <div style="padding:10px; border-style: ridge">
                    <h3>Email: ${req.body.to}</h3>
                    <h3>subject: ${req.body.subject}</h3>
                    <h3>Message: ${req.body.description}</h3>
                    </div>
                    `
        }

        transport.sendMail(mailOption, function (err, data) {
            if (err) {
                console.log(err)

                return res.json({ status: true, respMesg: "Error in the Code" })
            }
            else {

                console.log("Email send" + data.response)

                return res.json({ status: true, respMesg: " Email Send Successfully" })

            }
        });

    }
