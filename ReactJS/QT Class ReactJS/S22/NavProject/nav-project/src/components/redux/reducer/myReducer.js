const myReducer = (currentStoreData, action)=>{
    console.log("reducer called");
var newdata=""; //"Welcome to"

if(action.type==="FIRST"){
    newdata=action.payload + "QT";
}


return newdata;
}
export default myReducer;