import {useSelector} from 'react-redux';
function B(){
    const data = useSelector((reduxData)=>{
        return reduxData;
    });
    return(<div style={{padding:"30px", color:"blue"}}>
        <h2>B  Details Component</h2>
        <p>A data : {data.a}</p>
        <p>C data :{data.b}</p>
    </div>);
}
export default B;