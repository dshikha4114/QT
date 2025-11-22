const fs = require("fs");

fs.readFile("Home.html","utf-8",(error,data)=>{
    if(error){
        console.log("Failed to access the content of the file");
    }else{
        console.log(data);
    }
})