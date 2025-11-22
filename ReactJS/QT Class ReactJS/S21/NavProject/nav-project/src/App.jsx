import "./App.css";
import Nav from './components/nav/Nav.jsx';
// import Home from './components/routing/home/Home.jsx';
// import Electronics from './components/routing/electronics/Electronics.jsx';
// import Jewellery from "./components/routing/jewellery/Jewellery.jsx";
// import Mens from './components/routing/mens/Mens.jsx';
// import Womens from "./components/routing/womens/Womens.jsx";
// import ProductDetails from "./components/routing/product-details/ProductDetails.jsx";
// import Pagenotfound from "./components/routing/pagenotfound/Pagenotfound.jsx";
// import {Route, Routes} from 'react-router-dom';
//import RefComp from "./components/ref/RefComp.jsx";
//import RefDOM from "./components/ref/RefDOM.jsx";
import UseReducer from "./components/useReducer/UseReducerComp.jsx";

function App(){
  return <div>
        <Nav/>
        <UseReducer/>


        {/* <RefDOM/> */}
        {/* <RefComp/> */}

        {/* <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/electronics"} element={<Electronics/>}/>
                <Route path={"/jewellery"} element={<Jewellery></Jewellery>}></Route>
                <Route path={"/mens"} element={<Mens/>}/>
                <Route path={"/womens"} element={<Womens/>}></Route>
                // <Route path={"/productdetails/:id"} element={<ProductDetails/>}></Route>  
                <Route path={"*"} element={<Pagenotfound/>}></Route> 
        </Routes>  */}

        {/* /routepath/:pathparameter1/:pathparameter2/:pathparameter3*/}
         
  </div>
}

export default App;