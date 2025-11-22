var obj1={
    name:"abc",
};

//console.log(this);

function f1(a,b){
    console.log(this, a, b);// this=obj1{}
}
//f1.call(obj1, 5,3)
//f1.apply(obj1,[10,20]);
var  samef1=f1.bind(obj1,4,5);
samef1();

// const f2 = ()=>{
//     console.log(this);
// }
// f2.call(this); // empty object