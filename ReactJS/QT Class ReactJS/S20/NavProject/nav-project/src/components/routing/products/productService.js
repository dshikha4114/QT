import axios from 'axios';
// var info;
export const getProducts=(electronicsSetter)=>{
    axios
    .get("https://fakestoreapi.com/products")
    .then((res)=>{
        
        //console.log(res.data);
        // info=res;
        electronicsSetter(res.data);
    })
    .catch((error)=>{
        alert(error+"Something went wrong");
    });
}