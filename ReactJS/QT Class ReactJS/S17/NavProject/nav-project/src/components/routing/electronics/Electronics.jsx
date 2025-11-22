import React from "react";
import {useState} from 'react';
import "./Electronics.css";
import { getProducts } from "./electronicservice";
function Electronics(){
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
    </div>
}
export default Electronics;