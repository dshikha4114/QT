const fs = require("fs");

fs.unlink("Home.java",(error)=>{
    if(error){
        console.log("Failed to remove the file");
    }else{
        console.log("Successfully removed the file");
    }
});