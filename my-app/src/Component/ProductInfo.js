import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";


const ProductInfo = () => {

    const [Product,setproduct] = useState([])
    const {_id} = useParams("")

    useEffect(()=>{
        axios.post(`http://localhost:3000/product/list2/${_id}`)

        .then(function (response) {
            console.log(response.data.data)
            setproduct(response.data.data)
        })

        .catch(function (error) {
            console.log(error)
        })
    },[])
    return(
        
        <>
        <h1> prodetail </h1>
        <h1>{Product.ProductName}</h1>
        <h1>{Product.Price}</h1>
        <h1>{Product.Description}</h1>

        </>
    )
}

export default ProductInfo;