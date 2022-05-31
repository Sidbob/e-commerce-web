import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


import NavBarComponent from './Component/NavBarComponent';
import HomeComponent from './Component/HomeComponent';
import ShopComponent from './Component/ShopComponent';
import OnlyOnComponent from './Component/OnlyOnComponent';
import SupportComponent from './Component/SupportComponent';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store'
import BagPage from './Pages/BagPage';
import ProductInfo from "./Component/ProductInfo";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>

      <BrowserRouter>
        <NavBarComponent />

        <Routes>

          <Route path='/' element={<HomeComponent/>}/>
          <Route path='/Shop' element={<ShopComponent/>}/>
          <Route path='/OnlyOn' element={<OnlyOnComponent/>}/>
          <Route path='/Support' element={<SupportComponent/>}/>


          {/* bag pages */}

          <Route path='/Bag' element={<BagPage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/Register" element={<RegisterPage/>}/>


          {/* ///////// */}
          <Route path='/ProductInfo/:_id' element={<ProductInfo/>}/>
         
        </Routes>
      </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
