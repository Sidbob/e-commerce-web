import Footer from "./Footer";
import '../CSS/OnlyOn.css'
import { BsApple } from 'react-icons/bs'


const OnlyOnComponent = () => {

    return (

        <>
            <div className="container" id="main-con">
                <div className="col-md-12 col-sm-12" id="col-only-1">
                    <p className="h1" id="text-1-line">
                        The best experiences.
                    </p>
                    <p className="h1" id="text-2-line">
                        Only on Apple.
                    </p>
                    <p className="h5" id="para-1">
                        Get the most out of the devices you love with high-quality content and services. Award-winning series and films, amazing music in spatial audio, super-fun games and more. And they’re only on Apple.
                    </p>
                </div>

                <div className="col-md-12 col-sm-12" id="logo-text-col">
                    <div className="row" id="logo-apple">
                        <div className="col" id="logo-img">
                            <BsApple id="apple-logo" />
                        </div>
                        <div className="col" id="text">
                            <h2>Music</h2>
                        </div>
                    </div>

                    <div className="img-fluid" id="Music-con">
                        <img src={require("../Images/music_icon.png")} id="music-logo-C" />
                        <p className="h6" id="M-text">
                            Bundle with Apple one
                        </p>
                    </div>

                    <div className="row" id="M-title">
                        <div className="col-md-6 col-sm-6" id="M-title-col-1">
                            <p className="h4">
                                Listen to music you love in
                                spatial audio with Dolby Atmos.2
                            </p>
                        </div>
                        <div className="col-md-6 col-sm-6" id="M-title-col-2">
                            <p className="h5" id="M-btn-1">
                                Try it free
                            </p>
                            <p className="h5" id="M-btn-2">
                                Learn more
                            </p>
                        </div>

                    </div>

                </div>


                <div className="row" id="Cloud-row">

                    <div className="img-fluid" id="cloud-con">
                        <img src={require("../Images/icloud_icon.png")} id="cloud-logo-C" />
                        <p className="h6" id="C-text">
                            Bundle with Apple one
                        </p>
                    </div>

                    <div className="row" id="c-title">
                        <div className="col-md-6 col-sm-6" id="c-title-col-1">
                            <p className="h4">
                                The best place for photos
                                and files. Great features to
                                protect your privacy.
                            </p>
                        </div>
                        <div className="col-md-6 col-sm-6" id="c-title-col-2">
                            <p className="h5" id="c-btn-1">
                                Try it free
                            </p>
                            <p className="h5" id="c-btn-2">
                                Learn more
                            </p>
                        </div>

                    </div>


                </div>


                <div className="row" id="One-row">

                    <div className="col-md-12 col-sm-12" id="One-col">
                        <div className="row" id="One-row-1">
                            <div className="col" id="logo-col-One">
                            <img src={require("../Images/full_apple_one.jpg")} id="One-logo-img" />
                            </div>
                            
                        </div>

                        <div className="row" id="One-row-2">
                            <div className="col" id="One-logo-1">
                                <img src={require("../Images/apple_services_icons.png")} id="Services-One-C" />
                            </div>
                        </div>

                        <div className="row" id="One-text-row">
                            <div className="col" id="One-text-1">
                                <h4>Bundle four Apple services. And enjoy more for less.</h4>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12" id="One-col-btn">
                            <p className="h5" id="One-btn-1">
                                Try it free
                            </p>
                            <p className="h5" id="One-btn-2">
                                Learn more
                            </p>
                        </div>

                    </div>

                </div>

            </div>
            <Footer />

        </>

    )
}

export default OnlyOnComponent;