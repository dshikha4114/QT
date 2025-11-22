var data = [2,5,6,8,10,6789];
// [4,25,36,64,100]
function findSquare(){
    var newArray=[];
    while(data.length>0){
        var first=data[0];
        var res = first*first;
        newArray.push(res);
        data.shift();
    }
    return newArray;
}
var result=findSquare();
console.log(result);