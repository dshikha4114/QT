if(true){
    var a=10;
    let b=20;
    const c=30;   
}
    console.log(a); //Variable is function scope
    //console.log(b); //let is block scope
    //console.log(c); //const is block scope


function checkScope(){
    if(true){
        var x = 70;
        let y = 30;
        const z = 80;
    }
    console.log(x);
    //console.log(y);
    console.log(z);
}
checkScope();