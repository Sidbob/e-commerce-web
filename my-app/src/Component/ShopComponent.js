import "../CSS/ShopComponent.css"
import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import Form from 'react-bootstrap/Form'
import Footer from "./Footer";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../Redux/Action/action";
import { FormSelect, Offcanvas, OffcanvasBody, OffcanvasHeader } from "react-bootstrap";
import { Paper } from "@mui/material";
// import Form from 'react-bootstrap/Form'




const ShopComponent = () => {
    const getdata = useSelector((state) => state.cartReducer.carts);


    // console.log(getdata)

    


    const dispatch = useDispatch()

    const send = (e) => {
        dispatch(ADD(e))
    }

    const [product, setproduct] = useState([])

    const [category, setcategory] = useState([])

    const [categoryId, setcategoryId] = useState([])

    const [Subcategory, setSubcategory] = useState([])

    const [subcategoryId, setsubcategoryId] = useState([])

    const [productdata, setproductdata] = useState([])


    // USE EFFECT FOR ---CATEGORY LIST---
    useEffect(() => {

        axios.post('http://localhost:3000/category/list')

            .then(function (response) {
                // console.log(response.data.data)
                setcategory(response.data.data)
            })

            .catch(function (error) {
                console.log(error)
            })

    }, [])

    // USE EFFECT FOR ---SUB CATEGORY LIST---
    useEffect(() => {

        axios({
            method: 'post',
            url: 'http://localhost:3000/sub_category/list',
            data: {
                'category_id': categoryId
            }
        })
            .then(function (response) {
                setSubcategory(response.data.data)
                // console.log(response.data.data)
            })

            .catch(function (error) {
                console.log(error)
            })

    }, [categoryId])


    // USE EFFECT FOR ---PRODUCT LIST---
    useEffect(() => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/product/list',
            data: {
                'category_id': categoryId,
                'subcategory_id': subcategoryId
            }
        })

            .then(function (response) {
                setproductdata(response.data.data)
                // console.log(productdata)

            })

            .catch(function (error) {
                console.log(error)
            })
    })

    const handelCategory = (event) => {

        let getcategoryid = event.target.value
        setcategoryId(getcategoryid);
        console.log(getcategoryid)
    }

    const handelSubcategory = (event) => {
        let getsubcategoryid = event.target.value
        setsubcategoryId(getsubcategoryid)
        console.log(getsubcategoryid)
    }

    const ProductFilter = productdata.filter((e) => {
        return e.Subcategory_id === subcategoryId
    })
    


    useEffect(() => {

        const fetchproduct = async () => {

            const res = await axios.post('http://localhost:3000/product/list');

            const data = res.data.data
            // console.log(data)

            setproduct(data)
        }

        fetchproduct();


    }, []);

    return (

        <>

            <div className="row" id="row-shop">
                <div className="col-4" id="col-shop">
                    <Form.Select aria-label="Default select example" class="form-select" id="select-1" onChange={(event) => { handelCategory(event) }}>
                        <option value="" onChange={(event) => { handelCategory(event) }}>Select category</option>
                        {category.map((getcategory, index) => {
                            return (
                                <>
                                    <option key={index} value={getcategory._id}> {getcategory.category_name} </option>
                                </>
                            )
                        }
                        )}
                    </Form.Select>
                    <br />
                    <Form.Select aria-label="Default select example" class="form-select" id="select-2" onChange={(event) => { handelSubcategory(event) }}>
                        <option value="">Select Sub-category</option>
                        {Subcategory.map((getSubcategory, index) => {
                            return (
                                <>
                                    <option key={index} value={getSubcategory._id}> {getSubcategory.subcategoryname} </option>
                                </>
                            )


                        }
                        )}
                    </Form.Select>
                </div>
                <div className="col-md-8" id="col-shop-2">
                    {
                        ProductFilter.map(product => (
                            <div className="col-md-4" key={product.id} id="main-col-shop">

                                <h6>Filter Product</h6>
                                <Card sx={{ maxWidth: 345 }} className="main_card" >
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            src={product.ImageFile}
                                            alt="green iguana"
                                            id="pro-img"
                                        />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.ProductName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.Description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.short_desp}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            Price: {product.Price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => send(product)} >Add to Card</Button>
                                        <Button size="small" onClick={() => (product)}>Save</Button>
                                    </CardActions>
                                </Card>

                            </div>

                        ))
                    }
                    <div className="col" id="col-shop-1">
                        {
                            product.map(product => (
                                <div className="col-md-4" key={product.id} id="main-col-shop">

                                    <Paper sx={{ maxWidth: 345 }} className="main_card" id="pro-card">
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            src={product.ImageFile}
                                            alt="green iguana"
                                            id="pro-img"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product.ProductName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.Description}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.short_desp}
                                            </Typography>
                                            <Typography variant="h6" color="text.secondary">
                                                Price: {product.Price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={() => send(product)} id="add-btn">Add to Card</Button>
                                            <Button size="small" onClick={() => (product)} id="add-btn">Save</Button>
                                        </CardActions>
                                    </Paper>

                                </div>

                            ))
                        }

                    </div>
                </div>
            </div>
            <Footer />


        </>

    )

}

export default ShopComponent;