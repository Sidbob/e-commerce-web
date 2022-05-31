import Subcategory from "../model/sub_category.model";


// ---------------------( Add subcategary )------------------------------


export const ADDnew = async(req,res) =>{
    const { subcategoryname , category_id } = req.body;

    if(!category_id){
        return res.status(422).json({
            status:false,
            message: " category_id is require"
        })
    }

    if(!subcategoryname){
        return res.status(422).json({
            status:false,
            message:" subcategoryname is require"
        })
    }

    if(category_id){
        let subcatename =  { subcategoryname : subcategoryname , category_id : category_id }

        console.log(subcatename)

        let newSubcat = await Subcategory.create(subcatename);
        console.log(newSubcat)

        return res.status(200).json({
            message : " created successfully",
            data : newSubcat,
            status: true
        });
    }
    else {
        return res.status(422).json({
            status : false,
            message : "Category not exist"
        })
    }
}




// ---------------------( Delete subcategary )------------------------------


export const Deletesubcat = (req , res) =>{
    Subcategory.findByIdAndDelete(req.body.id , req.body , function (err,data){
        console.log(req.body.id)
        if(err){
            return res.status(422).json({
                status : false,
                message: "invalid request"
            });
        }

        if (data){
            return res.status(200).json({
                status : true,
                message : " Deleted successfully",
                data : data
            })
        }
    })
}


// ---------------------( Edit subcategary )------------------------------


export const Updatesubcat = (req , res ) =>{
    Subcategory.findByIdAndUpdate(req.body.id , req.body , function (err , data){
        if (err){
            return res.status(422).json({
                status : false,
                message : "something went worng"
            });
        }

        if (data){
            return res.status(200).json({
                status: true,
                message: " update data successfully",
                data : data
            })
        }
    })
}


// ---------------------( List Subcategary )------------------------------


export const Listsubcat = (req , res) =>{
    Subcategory.find( {"category_id":req.body.category_id} , function (err , data ){
        if(err){
            return res.status(422).json({
                massage:"Something went worng",
                status: false
            });
        }
        else{
            return res.status(200).json({
                massage:"Request successfully done",
                status:true,
                data : data
            });
        }
    });
}




