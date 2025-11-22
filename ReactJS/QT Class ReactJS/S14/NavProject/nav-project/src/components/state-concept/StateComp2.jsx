import {useState} from 'react';
function StateCom2(){
    let [state, setState]=useState(1010);
   

    function updateState(){
        
        //call setter function of useState();
        setState("Deepshikha");
       
    }


    return <div style={{textAlign:"center", margin:"50px auto" ,width:"500px", boxShadow:"0 0 10px" , padding:"30px"}}>
    <h2 style={{margin:"20px 0px", color:"red"}}>State Concept with array Destructuring : {state}</h2>
    <button onClick={updateState}>Update State</button>
    </div>
}

export default StateCom2;