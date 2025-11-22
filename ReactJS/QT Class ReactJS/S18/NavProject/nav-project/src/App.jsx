import "./App.css";
import Nav from './components/nav/Nav.jsx';
import Home from './components/routing/home/Home.jsx';
import Electronics from './components/routing/electronics/Electronics.jsx';
import Jewellery from "./components/routing/jewellery/Jewellery.jsx";
import Mens from './components/routing/mens/Mens.jsx';
import Womens from "./components/routing/womens/Womens.jsx";
import ProductDetails from "./components/routing/product-details/ProductDetails.jsx";
import Pagenotfound from "./components/routing/pagenotfound/Pagenotfound.jsx";
import {Route, Routes} from 'react-router-dom';

function App(){
  return <div>
        <Nav/>

        <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/electronics"} element={<Electronics/>}/>
                <Route path={"/jewellery"} element={<Jewellery></Jewellery>}></Route>
                <Route path={"/mens"} element={<Mens/>}/>
                <Route path={"/womens"} element={<Womens/>}></Route>
                <Route path={"/productdetails"} element={<ProductDetails/>}></Route>
                <Route path={"*"} element={<Pagenotfound/>}></Route>
        </Routes>

      
         
  </div>
}

export default App;