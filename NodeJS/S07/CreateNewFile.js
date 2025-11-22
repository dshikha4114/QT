const fs = require ("fs");
//here fs is a object

//1. create a new file
// fs.open("../../home.html", "w", (error)=>{
//     if(error){
//         console.log("Failed to create a file");
//     }else{
//         console.log("Successfully created a file");
//     }

// });

fs.writeFile("Products.jsx","",(error)=>{
    if(error){
        console.log("Failed to create a file");
    }else{
        console.log("Successfully created a file");
    }
});
