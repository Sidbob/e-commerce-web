
// import founder from './images/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.webp';
// import conatct from './images/18c7cb00-9829-11eb-9f9f-11c3d682f8cf.cf.jpg';
// import Footer from './components/Footer';


import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import '../CSS/Support.css';
import Footer from "./Footer";


const SupportComponent = () => {




    const [msg, setMsg] = useState('');
    const [user, setUser] = useState({
        to: "",
        subject: "",
        description: ""
    })

    const { to, subject, description } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(user)
    }


    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:3000/product/SendEmail', user)
            .then(function (response) {
                // console.log(response.data.data);
                setMsg(response.data.respMesg)
                alert("Email Sent Successfully")

            })
            .catch(function (error) {
                console.log(error);
                alert("Error Sending Email")
            })
    }









    return (
        <>
            <div className='container' id='container-1'>


                <div className='col-md-12' id='col-11'>
                    <img src={require("../Images/Support01.jpg")} className="img-fluid" />
                </div>

                <div className='row' id='row_01'>
                    <div className='col-md-12' id='W-col-1'>
                        <p className='h2'>
                            WhatsApp Us
                        </p>
                        <p className='h5' id='w-title'>
                            <small class="col-md-12">WhatsApp for Technical support or query, Service centre location, Repair status, Demo and installation request, New offers and more.</small>
                        </p>
                    </div>
                </div>

                <div className='row' id='row-02'>
                    <div className='col-md-8' id='W-col-3'>
                        <p className='h5' id='heading'>
                            Connect with our Product Specialist on WhatsApp for
                        </p>
                        <div className='card-title' id='title'>
                            <p className='h5'>
                                - Technical support or query for any Samsung product
                            </p>
                            <p className="h5">
                                - Service centre location
                            </p>
                            <p className="h5">
                                - Repair status
                            </p>
                            <p className="h5">
                                - Demo and installation request
                            </p>
                            <p className="h5">
                                - New offers and more
                            </p>
                        </div>
                        <div className='card-title' id='last-title'>
                            <img src={require('../Images/qr-code-file.png')} />
                            <p className='h5'>
                                Scan and Save
                            </p>
                            <p className="h5">
                                Samsung Customer Support
                            </p>
                            <p className="h5">
                                WhatsApp number
                            </p>
                            <p className="h5">
                                1800 5 7267864 (SAMSUNG)
                            </p>
                        </div>
                        <div className='card-title' id='qr-code'>
                        </div>
                        {/* <br>
                                - Technical support or query for any Samsung product
                            </br>

                            <br>
                                - Service centre location
                            </br>

                            <br>

                                - Repair status
                            </br>

                            <br>

                                - Demo and installation request
                            </br>

                            <br>

                            - New offers and more
                            </br> */}
                    </div>
                    <div className='col-md-4' id='W-col-4'>
                        <img src={require("../Images/whatsapp_m.png")} />
                    </div>

                </div>

                <div className='col-md-12 col-sm-12' id='col-12'>
                    <img src={require("../Images/psp-hero-banner-homepage.jpg")} className="img-fluid"/>

                </div>


            </div>

            

            <Container id="emailer-con" >
                <Grid container direction='row'>

                    <Grid className='col-md-6 col-sm-6' id="info" >
                        <h1 className="subcathead4">Contacts</h1>
                        <p className='subcatdetails'>We’d love to help you with an order, for general customer service enquiries or product questions. The best time to reach us is Mon - Sat 9.00 am - 6:00 pm (Indian Standard Time).</p><br />
                        <p className='subcatdetails'>EMAIL</p>
                        <p className='subcatdetails'>contact@theshelps.com</p>
                    </Grid>
                </Grid>
                    <Grid className='col-md-6 col-sm-6' item xs={12} sm={12} md={6} lg={6}>
                        <h1 className="subcathead2">Let's Get In Touch</h1>
                        <input onChange={onInputChange} value={to} name="to" type="text" placeholder="To" className='mailinput' />
                        <br /><br />
                        <input onChange={onInputChange} value={subject} name="subject" type="text" placeholder="Subject" className='mailinput' />
                        <br /><br />
                        <textarea onChange={onInputChange} value={description} name="description" className='mailinput' placeholder='Message' cols="55" rows="6" />
                        <br /><br />
                        <button onClick={onSubmit}>Submit</button>
                    </Grid>
            </Container>




            <Container >
                <Grid container direction='row' >


                    <Grid className='subcatinfo2' item xs={12} sm={12} md={6} lg={6}>
                        {/* <img className='subcatimg3' src={conatct} /> */}
                    </Grid>

                </Grid>
            </Container>







            <Footer />       

        </>
    )
};



export default SupportComponent;