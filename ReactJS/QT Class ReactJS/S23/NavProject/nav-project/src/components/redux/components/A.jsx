import {useState} from 'react';
import { firstActionCreator } from '../action-creator/firstAction';
import mystore from '../store/store';
function A(){
    const [state,setState]=useState("Hello I am from a component");
    const getAction = () =>{
        const actionObject = firstActionCreator(state);
        mystore.dispatch(actionObject);
    }
    return(<div style={{padding:"30px", color:"red"}}>
        <h2>A Component</h2>
        <button onClick={getAction}>submit</button>
    </div>);
}
export default A;