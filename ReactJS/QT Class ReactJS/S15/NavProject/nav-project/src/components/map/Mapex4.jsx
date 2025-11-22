import {users} from '../data/Users1.js';
function Mapex4(){
    return(<div style={{textAlign:"center", marginTop:"100px"}}>
        <h2>Map Concept</h2>
        {   users.map((element)=>{
            return <h3>{element}</h3>
        })}
     
    </div>);
}
export default Mapex4;