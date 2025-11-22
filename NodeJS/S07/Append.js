const fs = require("fs");

fs.readFile("Contact.html","utf-8" , (error,data)=>{
    if(error){
        console.log("Failed to read the file")
    }else{
        fs.appendFile("Newhtml.html",data, (error)=>{
            if(error){
                console.log("Failed to add the content");
            }else{
                console.log("Successfully added the content in the Newhtml.html");
            }
            });
                        }
                        });



