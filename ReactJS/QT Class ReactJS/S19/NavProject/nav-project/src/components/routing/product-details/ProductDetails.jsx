import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import "./ProductDetails.css";
import axios from "axios";
function ProductDetails(){
   const {id} = useParams();//obj={id:5} id from /:id or   obj={x:5} if from /:x
   const [product,setProduct]=useState({
    title:"",
    image:"",
    description:"",
    rating:{rate:0,count:0},
    price:0,
    category:"",

   });
   useEffect(()=>{
    getProducts();
   },[])
    const getProducts=()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            console.log(res);
            setProduct(res.data);
        }).catch((error)=>{
            alert("Failed to get the product details");
            console.log(error);
            
        })

    }
    return <div className="pdcontainer">
    {/* <h1>Product Details : {id}</h1> */}
    <div className="leftPanel">
        <img src={product.image} alt="Electronic Product" width={350} height={400}/>
    </div>
    <div className="rightPanel">
        <dl>
            <dt><b>Product Title</b></dt>
            <dd>{product.title}</dd>
            <dt><b>Price</b></dt>
            <dd>{product.price}</dd>
            <dt><b>Product Category</b></dt>
            <dd>{product.category}</dd>
            <dt><b>Rating</b></dt>
            <dd>{product.rating.rate}</dd>
            <dt><b>Description</b></dt>
            <dd>{product.description}</dd>
        </dl>
        <button>Buy Products</button>
        <button>Add to Cart</button>
    </div>
    </div>
}

export default ProductDetails;
