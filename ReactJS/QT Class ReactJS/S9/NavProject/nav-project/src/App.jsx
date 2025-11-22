import "./App.css";
import Nav from './components/nav/Nav.jsx';
import Category from './components/category/Category.jsx';
import Img from './components/image/Img.jsx';
import Mensfashion from "./components/fashion/Mensfashion.jsx";
import Macbookpro from "./components/Electronics/Macbookpro.jsx";
import SamsungGalaxyS23Ultra from "./components/electronics/SamsungGalaxyS23Ultra.jsx";
import Trimmer from "./components/electronics/Trimmer.jsx";

function App(){
  return <div>
        <Nav/>
        <div className="categories1">
                          <Category imgurl={"https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"} titlenm={"Kilos"}/>
                          <Category imgurl={"https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100"} titlenm={"Mobiles"}/>
                          <Category imgurl={"https://rukminim2.flixcart.com/fk-p-flap/100/100/image/cb8cea37b03f03d3.jpg?q=50"} titlenm={"Fashion"}/>
                          <Category imgurl={"https://rukminim2.flixcart.com/image/150/150/xif0q/selfie-stick/d/4/t/680-na-506-infinite-digital-original-imah6zs6wgvtqh5r.jpeg?q=70"} titlenm={"Electronics"}/>
                          <Category imgurl={"https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/p/r/x/-original-imah8j62gusy7r6f.jpeg?q=70"} titlenm={"Home and Furniture"}/>
                          <Category imgurl={"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100"} titlenm={"Appliances"}/>
                          <Category imgurl={"https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100"} titlenm={"Flight Bookings"}/>
                          <Category imgurl={"https://rukminim2.flixcart.com/image/612/612/xif0q/eye-shadow/1/a/r/70-60-color-matte-shimmery-pigment-eyeshadow-minara-original-imagta8c3hzzhdez.jpeg?q=70"} titlenm={"Beauty, Toys and More"}/>
                          <Category imgurl={"https://rukminim2.flixcart.com/image/312/312/xif0q/electric-bike-scooter/m/p/v/2024-portable-charger-3202-drum-booking-for-ex-showroom-price-original-imah432ayzvkcyfb.jpeg?q=70"} titlenm={"Two Wheelers"}/>
        </div>
        <Img/>
        <Mensfashion/>
        <Macbookpro/>
        <SamsungGalaxyS23Ultra/>
        <Trimmer/>

      

        
  </div>
}

export default App;