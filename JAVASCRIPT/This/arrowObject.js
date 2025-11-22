var obj2={
    x:"xyz",
    fn:()=>{
        console.log(this);
    }
}

console.log(obj2);
obj2.fn();