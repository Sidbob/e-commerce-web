import React, { Component } from "react";
import Slider from "react-slick";
import Carousel from 'react-bootstrap/Carousel'
import { useState } from "react";
import '../CSS/HomeComponent.css'
import Footer from "./Footer";
import { Paper } from "@mui/material";


const HomeComponent = () => {

    const [index, setIndex] = useState(0);

    const [gold, setgold] = useState({ display: "block" })

    const [black, setblack] = useState({ display: "none" })

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }


    const fun01 = () => {
        setblack({ display: "none" })
        setgold({ display: "block" })
    }

    const fun02 = () => {
        setblack({ display: "block" })
        setgold({ display: "none" })
    }

    return (

        <>
            <div className="container" id="container-1">


                <Carousel activeIndex={index} onSelect={handleSelect} id="main-carousel">

                    <Carousel.Item id="Item-1">
                        <img
                            className="d-block "
                            src={require("../Images/b2c-fgf-tabs.jpg")}
                            alt="First slide"
                            id="d-block-1"
                        />
                        {/* <Carousel.Caption id="caption-1">
                            <h3>Galaxy S22 Ultra 1TB</h3>
                            <p>Be a trendsetter and embrace the bold tones of Galaxy S22 Ultra. The sophisticated and timeless colors amplify the sleek design.2</p>

                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item id="Item-2">
                        <img
                            className="d-block"
                            src={require("../Images/Qled_tv.jpg")}
                            alt="Second slide"
                            id="d-block-2-img"
                        />

                        {/* <Carousel.Caption id="caption-2">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item id="Item-3">
                        <img
                            className="d-block"
                            src={require("../Images/b2c-fgf.jpg")}
                            alt="Third slide"
                            id="d-block-3-img"
                        />

                        {/* <Carousel.Caption id="caption-3">
                            <h3>Let's do Neo QLED 8K
                            </h3>
                            <p>
                                Evolution of Neo QLED comes with Quantum Matrix Technology, which precisely controls our exclusive new Quantum Mini LED. With accurate light control, you can enjoy great detail in in both the darkest and brightest scenes.
                            </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>


            <div className="container" id="container-2">
                <div className="row" id="row-1">

                    <div className="col-md-8 col-sm-8" id="col-1">
                        <img
                            src={require("../Images/Tabs.webp")} className='img-fluid'
                        />
                        <p className="h4">Galaxy Tab S8 | S8+ | S8 Ultra </p>
                    </div>
                    <h4 id="tab-btn-01">Learn more</h4>

                </div>

                <div className="row" id="row-09">
                    <div className="col-md-6 col-sm-6" id="col1">
                        <img src={require("../Images/3-image-phone.webp")} className="img-fluid" id="image-2" style={gold} />
                        <img src={require("../Images/3-phone-black.webp")} className="img-fluid" id="image-1" style={black} />

                    </div>

                    <div className="col-md-6 col-sm-6" id="color-contain">
                        <p className="h4" id="image-title">
                            Be a trendsetter and embrace the bold tones of Galaxy S22 Ultra. The sophisticated and timeless colors amplify the sleek design.2
                        </p>
                        <div className="row" id="color-row">
                            <div className="col" id="color-col-1">
                                <img src={require("../Images/S22_Ultra_ColorChip-gold.webp")} onClick={fun01} />
                                <h6>Burgundy</h6>
                            </div>
                            <div className="col" id="color-col-2">
                                <img src={require("../Images/S22_Ultra_ColorChip_black.webp")} onClick={fun02} />
                                <h6>Phantom Black</h6>
                            </div>

                        </div>
                        <div className="col" id="phone-btn">
                            <p className="h4">
                                Learn more
                            </p>

                        </div>

                    </div>


                </div>
            </div>
            <div className="col" id="container-4">
                <div className="col" id="row-1-text">
                    <h3 id="first-text">Help is here.</h3>
                    <h3 id="second-text">Whenever and however you need it.</h3>
                </div>

                <div className="col" id="all-col-1">
                    <div className="col-md-6" id="left-col-1" >
                        <Paper elevation={12} id="paper-leftcol">
                            <h4 className="h4" id="text-leftcol-1">
                                Shop one on one with a Specialist online.
                            </h4>
                            <img src={require('../Images/store-card-50.jpg')} id="img-leftcol-1" />
                        </Paper>
                    </div>
                    <div className="col-md-6" id="right-col-2">
                        <Paper elevation={12} id="paper-upercol">
                            <h3>Get to know your new device with a free Personal Session. </h3>
                            <img src={require("../Images/store-card-25.jpg")} id="img-upercol-2"/>
                        </Paper>
                        <Paper elevation={12} id="paper-lowercol">
                            
                            <h3>Service and support. We’re here to help. </h3>
                            <img src={require("../Images/store-card-25-genius.jpg")} id="img-lowercol-2"/>
                        </Paper>

                    </div>
                </div>
            </div>

            <Footer />


        </>

    )


}

export default HomeComponent;