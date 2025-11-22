const myReducer = (currentStoreData, action)=>{
    console.log("reducer called");
var newdata={
    a:"",
    b:"",
    //c:"",
}; //"Welcome to"

if(action.type==="FIRST"){
    newdata={
        ...currentStoreData,
        a:action.payload,
    };
}else if(action.type==="CITY"){
    newdata={
        ...currentStoreData,
        b:action.payload,
    };

}


return newdata;
}
export default myReducer;