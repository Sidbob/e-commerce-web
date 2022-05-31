import User from "../model/user.model";
import Userrole from "../model/userrole.model";



// --------------------------- Addrole ---------------------------


export const Addrole = (req, res) => {

    const { Role } = req.body

    if (!Role) {
        return res.status(422).json({
            status: false,
            message: " Role is require"
        });
    }



    Userrole.create(req.body, function (err, data) {
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


// --------------------------- Addrole ---------------------------

export const Deleterole = (req, res) => {
    Userrole.findByIdAndDelete(req.body.id, req.body, function (err, data) {
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


// --------------------------- Editrole ----------------------------

export const Updaterole = (req, res) => {
    Userrole.findByIdAndUpdate(req.body.id, req.body, function (err, data) {
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


///////////////////////////////////////////////////////////////////////////////////////

 //     User.find( req.body , function ( err, data ){
    //         if(err){
    //             return res.status(422).json({
    //                 massage:"Something went worng",
    //                 status: false
    //             });
    //         }
    //         else{
    //             return res.status(200).json({
    //                 massage:"Request successfully done",
    //                 status:true,
    //                 data : data
    //             });
    //         }
    //     });