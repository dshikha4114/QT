import {useRef,useState} from "react";
import {useDispatch} from 'react-redux';
import { cityActionCreator } from "../action-creator/firstAction";
function C(){
    const [state,setState]=useState("");
    const inputRef =useRef();//userRef returns one object {current:""} 
    const dispatch = useDispatch();// useDispatch() return one dispatch function 
    const getData=()=>{
        //alert(inputRef.current.value);
        //1.const action= cityActionCreator(inputRef.current.value);
        //mystore.dispatch(actionObject);//Another way to call dispatch is react-redux library
        //2.dispatch(action); combining 1 and 2 
        //dispatch(cityActionCreator(inputRef.current.value)); using useRef()
        dispatch(cityActionCreator(state));
    }
return(
    <div style={{padding:"30px", color:"coral"}}>
        <h2>C Component</h2>
        <input onChange={(e)=>{setState(e.target.value)}} value={state} ref={inputRef}type="text" placeholder="Add city"/>
        <button onClick={getData}>Submit</button>
    </div>
);    
}
export default C;