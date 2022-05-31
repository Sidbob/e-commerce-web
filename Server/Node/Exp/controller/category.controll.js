import Category from "../model/category.model";
import Subcategory from "../model/sub_category.model";
import Product from "../model/product.model";



// ---------------------( Add categary_name )------------------------------


export const Add = async (req, res) => {
    const { category_name } = req.body

    if (!category_name) {
        res.status(422).json({
            status: false,
            message: "category_name is require"
        });
    }

   let Data1 = await Category.findOne( { category_name : req.body.category_name})

   if(Data1){
       return res.status(422).json({
           massage:"alredy exist",
           status:false

       });
   }

   if(!Data1){
       let userData = { category_name }
       let FData = await Category.create(userData)
       return res.status(200).json({
           massage:"new category added",
           data: FData,
           status:true
       });
   }

}


// ---------------------( Delete categary_name )------------------------------



// export const Delete = (req, res) => {
//     Category.findByIdAndDelete(req.body.Category_id, req.body, function (err, data) {

//         console.log(data)

//         if (err) {
//             res.status(422).json({
//                 status: false,
//                 massage: "something went wrong"
//             });
//         }

//         if (data) {
//             Subcategory.deleteMany(req.body.id, function (err, data) {
//                 if (err) {
//                     res.status(422).json({
//                         status: false,
//                         massage: "something went wrong"
//                     });
//                 }

//                 if (data) {

//                     Product.deleteMany(req.body.id, function (err, data) {
//                         if (err) {
//                             res.status(422).json({
//                                 status: false,
//                                 massage: "something went wrong"
//                             });
//                         }

//                         if (data) {
//                             return res.status(200).json({
//                                 status: true,
//                                 massage: "Success",
//                                 data: data
//                             });
//                         }
//                     });

//                 }
//             });

//         }


//     });
// }


export const Delete = (req, res) => {

    Category.findByIdAndDelete(req.body.category_id, function (err, data) {
        if (!req.body.category_id) {
            return res.status(422).json({
                message: 'category_id is required.',
                status: false
            });
        }
        if (err) {
            return res.status(422).json({
                message: "category_id you entered is either wrong or does not exist. Kindly enter a valid Category ID."
            })
        }
        if (data) {
            return res.status(200).json({
                message: "Category data has been deleted successfully.",
                data: data,
                status: true
            });
        }
    });

    Subcategory.deleteMany({ "category_id": req.body.category_id }, function (err, data) {
        if (!req.body.category_id) {
            return res.status(422).json({
                message: 'category_id is required.',
                status: false
            });
        }
        if (err) {
            res.status(422).json({
                status: false,
                message: "Something went wrng"
            });
        }
        if (data) {
            return res.status(200).json({
                status: true,
                message: "Success",
                data: data
            });
        }
    });


    Product.deleteMany({ "category_id": req.body.category_id }, function (err, data) {

        if (!req.body.category_id) {
            return res.status(422).json({
                message: 'category_id is required.',
                status: false
            });
        }
        if (err) {
            res.status(422).json({
                status: false,
                message: "Something went wrng"
            });
        }
        if (data) {
            return res.status(200).json({
                status: true,
                message: "Success",
                data: data
            });
        }
    });
}


// ---------------------( Edit categary_name )------------------------------

export const Update = (req, res) => {
    Category.findByIdAndUpdate(req.body.id, req.body, function (err, data) {
        console.log(data)
        if (err) {
            return res.status(500).json({
                message: "Something went wrong",
                status: false
            });
        }

        if (data) {
            return res.status(200).json({
                status: true,
                massage: "Success",
                data: data
            });
        }

    });
}


// ---------------------( List categary_name )------------------------------


export const List = (req, res) => {
    Category.find({}, function (err, data) {
        if (err) {
            return res.status(422).json({
                massage: "Something went worng",
                status: false
            })
        }
        else {
            return res.status(200).json({
                massage: "Request successfully done",
                status: true,
                data: data
            })
        }
    })
}
