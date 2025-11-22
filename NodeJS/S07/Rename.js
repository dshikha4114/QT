const fs = require("fs");

fs.rename("Products.jsx","Product.js",(error)=>{
    if(error){
        console.log("Failed to rename the file");
    }else{
        console.log("Successfully renamed the file");
    }
})