import {useState,useRef} from "react";
function RefComp(){
    const [state,setState]=useState("hi");
    let obj = useRef(true);//{current:}
    const [data,setData]=useState(999);
    var normal = 100;
    const updateVariable=()=>{
        //normal=500;
        setData(1000);
    }
    const displayData = () =>{
        console.log("Variable Value",normal);
        console.log("first State Value",state);
        console.log("Second state value",data);
        console.log("Useref", obj.current)
    }
    const updateState = () =>{
        setState("hello");
    }
    const updateRef = () =>{
        obj.current=false;
    }
    return (
        <div style={{marginTop:"50px", textAlign:"center"}}>
        <h2>useRef Concept: First State Varible {state}     /       Normal Variable {normal}   /  Second State Variable {data}     </h2>
        <button onClick={updateVariable}>update variable </button>
        <button onClick={updateState}>update state</button>
        <button onClick={displayData}>display data</button>
        <button onClick={updateRef}>update ref</button>
        </div>
    )
}
export default RefComp;