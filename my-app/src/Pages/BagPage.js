import { Paper } from '@mui/material';
import { Button, NavLink } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../CSS/BagPage.css'
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { DLT } from '../Redux/Action/action';
import { useState } from 'react';



const BagPage = () => {


    const [Price,setPrice] = useState(0)
    console.log(Price)
    const Bagitems = useSelector((state) => state.cartReducer.carts)
    console.log(Bagitems)

    const dispatch = useDispatch();



    const dlt = (_id) => {
        dispatch(DLT(_id))
        console.log(_id)
    }

    const totle = ()=>{
        let Price= 0 
        Bagitems.map((ele,k)=>{
            Price = ele.Price + Price
        });
        setPrice(Price);
    } 

    return (
        <>
            <div className='container'>
                {
                    Bagitems.length ?
                        <tbody>
                            {
                                Bagitems.map((e) => {
                                    return (
                                        <>
                                            {/* <Link > */}
                                            <Paper className='row' id="paper" elevation={12}>
                                                <div className='row' id='main-card'>

                                                    <div className='col-md-4' id='cardimg' to={`/ProductInfo/${e._id}`}>
                                                        <CardMedia
                                                            component="img"
                                                            height="auto"
                                                            src={e.ImageFile}
                                                            alt="green iguana"
                                                            id="pro-img-bag"
                                                        />
                                                    </div>


                                                    <div className='col-md-6' id='card_info'>

                                                        <h3 className='card-title' id='proname'>{e.ProductName}</h3>

                                                        <div class="row" id='D_row'>
                                                            <div class="col" id='prodetail'>
                                                                {e.Description}
                                                            </div>
                                                            <div class="col">
                                                                {e.Price}  ₹
                                                            </div>
                                                        </div>
                                                        <div className='row' id='second-D_row'>
                                                            <div class="col">
                                                                <span style={{fontSize:29}} id="add-dele-q">-</span>
                                                                <span style={{fontSize:24}} id="add-dele-q">1</span>
                                                                <span style={{fontSize:24}} id="add-dele-q">+</span>
                                                            </div>

                                                            <div className='col' id='delete' onClick={() => dlt(e._id)}>
                                                                <MdOutlineDeleteOutline className='col' id='delete-btn' />
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </Paper>
                                            <hr style={{color:"black",size:"12px"}}></hr>
                                            {/* </Link> */}
                                        </>
                                    )
                                })
                            }
                        </tbody> :
                        <div className='container-md as-l-container rs-zoom-content'>

                            <div className="col-md-12" id='bagempty'>
                                <h1 className="rs-bag-header"> Your bag is empty</h1>

                                <div className='col-md-12' id="rs-bagempty-message">
                                    Buy online and get free two-day delivery on all in-stock items and free next-day delivery on iPhone.
                                </div>
                            </div>

                            <div className='col' id='rs-bagempty-actions'>
                                <div className='col-md-12' id='rs-bagempty-button'>
                                    <a className='col ' id="form-button">Continue Shopping</a>
                                </div>
                            </div>
                            <div className='col-md-12' id="as-chat">
                                <div className='as-l-container rs-chat-content'>
                                    <span>Need some help? call 000000 000 0000</span>
                                </div>
                            </div>

                            <div className='col-md-12' id='rs-bag-productspotlight'>
                                <div className='col-md-12' id='dd-l-plate'>
                                    <img src={require('../Images/bag.jpg')} />
                                </div>
                            </div>
                        </div>




                }
            </div>
        </>
    )
}

export default BagPage;