var obj1={
    x:"xyz",
    fn: function f1(){
        console.log(this);//pointing to current object Results={ x: 'xyz', fn: [Function: f1] }
    }
}

console.log(obj1);
obj1.fn();