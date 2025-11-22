var data = [2,5,6,8,10,6789];

var newArray = data.map((element,index,array)=>{
    return element * element;
})

console.log(newArray);

// data.map((element)=>{
//     return jsx;
// });