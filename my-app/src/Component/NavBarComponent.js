import { BsApple } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { AiFillCaretUp } from 'react-icons/ai';
import { MdSaveAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { RiSettings5Line } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import '../CSS/navbar.css'

const NavBarComponent = () => {
    const countaddcard = useSelector((state) => state.cartReducer.carts)
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id='main-bar'>
                <div class="container-fluid" id='conflu'>

                    <a class="navbar-brand" href="#" id='mainlogo'><BsApple id='logo-1' /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>



                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav" id='mid-col'>
                            <li class="nav-item" id='com'>
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
                            </li>
                            <li class="nav-item" id='com'>
                                <a class="nav-link" href="#"><Link to="/Shop">Shop</Link></a>
                            </li>
                            <li class="nav-item" id='com'>
                                <a class="nav-link" href="#"><Link to="/OnlyOn">Only On Apple</Link></a>
                            </li>
                            <li class="nav-item" id='com'>
                                <a class="nav-link" href="#"><Link to="/Support">Support</Link></a>
                            </li>
                        </ul>
                    </div>





                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <BsBag id='baglogo' />
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='bag-body'>
                        <AiFillCaretUp className='dropdown-item' id='up'/>

                        <li className='dropdown-item' id='bag-li' >
                            <a className='dropdown-item' id='bag-a'> <Link to='/bag' className='ac-gn-bagview-nav-link'> <BsBag className='ac-gn-bagview-baglogo' /> Bag </Link> </a>
                            <span className='bagcount'>{countaddcard.length}</span>
                        </li>


                        
                            <li className="dropdown-item" id='bag-li'>
                                <a className='dropdown-item' id='bag-a'> <MdSaveAlt className="save-logo" /> Saved Items </a>
                                <span className='bagcount'>{countaddcard.length}</span>
                            </li>
                    
                        <li className='dropdown-item' id='bag-li'>
                            <a className='dropdown-item' id='bag-a'> <RiSettings5Line className="ac-gn-bagview-accountlogo" />Account </a>
                        </li>
                        <li className='dropdown-item' id='bag-li'>
                            <a className='dropdown-item' id='bag-a'> <Link to='/Login' className='ac-gn-bagview-nav-link'> <CgProfile className="ac-gn-bagview-signlogo" /> Sign in </Link> </a>
                        </li>
                        <li className='dropdown-item' id='bag-li'>
                            <a className='dropdown-item' id='bag-a'> <Link to='/Register' className='ac-gn-bagview-nav-link'> <CgProfile className="ac-gn-bagview-signlogo" />  Register </Link> </a>
                        </li>
                    </ul>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='bag-body'>
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>

            </nav>



            {/* <div className='container' id='ac-gn-bagview-content'>
                <p className='ac-gn-bagview-message'> Your Bag</p>
                <nav className='ac-gn-bagview-nav'>
                    <ul className='ac-gn-bagview-nav-list ac-gn-bagview-nav-nobtn'>

                        <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-bag'>
                            <a className='ac-gn-bagview-nav-link'> <Link to='/bag' className='ac-gn-bagview-nav-link'> <BsBag className='ac-gn-bagview-baglogo' /> Bag </Link> </a>
                            {/* <span className='bagcount'>{countaddcard.length}</span> */}
            {/* </li> */}


            {/* // <Badge badgeContent={4} color="primary" > */}
            {/* <li className="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-savedbyyou">
                                <a className='ac-gn-bagview-nav-link'> Saved Items </a>
                            </li>
                        </Badge>
                        <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-account'>
                            <a className='ac-gn-bagview-nav-link'> <RiSettings5Line className="ac-gn-bagview-accountlogo" />Account </a>
                        </li>
                        <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-signIn"'>
                            <a className='ac-gn-bagview-nav-link'> <Link to='/Login' className='ac-gn-bagview-nav-link'> <CgProfile className="ac-gn-bagview-signlogo" /> Sign in </Link> </a>
                        </li>
                        <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-signIn"'>
                            <a className='ac-gn-bagview-nav-link'> <Link to='/Register' className='ac-gn-bagview-nav-link'> <CgProfile className="ac-gn-bagview-signlogo" />  Register </Link> </a>
                        </li> */}
            {/* </ul>
                </nav>
            </div> */}

            {/* <div className='container' tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"> */}
            {/* <div className='offcanvas-header' id="title">
                    <h5 className="text-center" id="offcanvasExampleLabel">Your Bag</h5>
                </div> */}
            {/* <div className='container' id='list-container'>
                    <ul class="list-group" id='list'>
                        <li class="list-group-item" id='list-li-1'>
                            <a className='list-group-item' id='list-a-1'><BsBag className='ac-gn-bagview-baglogo' /><Link to="/ag">Bag</Link> <span className='list-group-item' id='count'>{countaddcard.length}</span></a>
                            {/* <span className='list-group-item'>{countaddcard.length}</span> */}
            {/* </li>
                    </ul>
                    <ul class="list-group" id='list'>
                        <li class="list-group-item" id='list-li-2'>
                            <a className='list-group-item' id='list-a-2'><BsBag className='ac-gn-bagview-baglogo' />Saved Items</a>
                        </li>
                    </ul>
                    <ul class="list-group" id='list'>
                        <li class="list-group-item" id='list-li-3'>
                            <a className='list-group-item' id='list-a-3'><RiSettings5Line className="ac-gn-bagview-accountlogo" /> Account </a>
                        </li>
                    </ul>
                    <ul class="list-group" id='list'>
                        <li class="list-group-item" id='list-li-4'>
                            <a className='list-group-item' id='list-a-4'><CgProfile className="ac-gn-bagview-signlogo" /> Sign in </a>
                        </li>
                    </ul>
                    <ul class="list-group" id='list'>
                        <li class="list-group-item" id='list-li-5'>
                            <a className='list-group-item' id='list-a-5'><CgProfile className="ac-gn-bagview-signlogo" />  Register </a>
                        </li>
                    </ul> */}

            {/* </div>  */}



            {/* </div> */}

        </>
    )
}

export default NavBarComponent;
