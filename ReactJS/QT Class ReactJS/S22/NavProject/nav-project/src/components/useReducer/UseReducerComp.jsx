import {useReducer} from "react";
const reducerFn= (state,action)=>{
    //logic to update the state
    var newstate;
    if(action.type==="inc"){
            newstate= state+action.data;
    }else if(action.type==="dec"){
            newstate= state-action.data;
    }else if(action.type==="inc5"){
        newstate= state+action.data;

    }else if(action.type==="dec3"){
        newstate= state-action.data;

    }else{
        newstate=1;

    }
return newstate;
}
function UseReducerComp(){
    const [state,dispatch]=useReducer(reducerFn, 1);
    return <div style={{border:"2px solid red", padding:"50px"}}>
            <h2>Use Reducer Hook    :{state}</h2>
            <button onClick={()=>{dispatch({type:"inc",data:1,})}}>Inc</button>&nbsp; &nbsp;
            <button onClick={()=>{dispatch({type:"dec",data:1,})}}>Dec</button>&nbsp; &nbsp;
            <button onClick={()=>{dispatch({type:""})}}>Reset</button>&nbsp; &nbsp;
            <button onClick={()=>{dispatch({type:"inc", data:5,})}}>Increment by 5</button>&nbsp; &nbsp;
            <button onClick={()=>{dispatch({type:"dec",data:3,})}}>Decrement by 3</button>&nbsp; &nbsp;
            
    </div>
}
export default UseReducerComp;