import React from "react";
import {useState} from 'react';
import "/src/components/routing/products/Products.css";
import { getProducts } from "../products/productService";


function Products({category}){
    const [electronics,setElectronics]=useState([]);
    console.log(electronics);
    return <div className="electronics">
        <section id="electronicsBanner">
            <section className="bgShadow">
                <h1>Electronics Products Data</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia omnis tenetur saepe earum temporibus voluptas provident suscipit, aperiam ipsum magnam. Corrupti dolores exercitationem dicta consequatur numquam nemo in adipisci corporis aspernatur magnam at cum molestiae officiis nulla ipsa, dolore repellendus labore temporibus. Ducimus cum error ratione exercitationem. Temporibus, odit excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quod expedita saepe pariatur minus dolore fuga similique vero alias cupiditate nam, libero corporis iste necessitatibus aperiam sed quaerat rerum odio repellat, laborum delectus adipisci laudantium eligendi esse. Aut, libero corrupti rerum earum accusantium atque architecto nisi nobis ab culpa ut!</p>
            </section>
        </section>
        <section className="temp">
            <button onClick={()=>{
               getProducts(setElectronics); 
            }}>Get Data</button>
        </section>

        <section className="productData">
            {
                electronics.filter((pro)=>pro.category===category).map((product)=>{
                    return(
                        <div className="card">
                                <img src={product.image} alt={"image from fake store api"} width={230} height={230}/>
                                <h3>{product.title}</h3>
                                <p style={{color:"black"}}>${product.price}</p>
                                <p>{product.category}</p>
                                <button>Product Details</button>
                                <button>Add to Cart</button>
                        </div>
                    )
                })
            }
        </section>
    </div>
}
export default Products;