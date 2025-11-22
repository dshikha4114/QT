import {useSelector} from 'react-redux';
function B(){
    const data = useSelector((reduxData)=>{
        return reduxData;
    });
    return(<div style={{padding:"30px", color:"blue"}}>
        <h2>B Component</h2>
        <p>A data : {data}</p>
    </div>);
}
export default B;