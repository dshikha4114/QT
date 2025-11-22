function TextComp({value}){                 {/*here(props) can be also used because in the props ={value: .......}  but here we are used destructuring*/}
    return(<div>
        <h2>Text Comp</h2>
        <p style={{color:"red"}}>----{value}-----</p>
    </div>);
}
export default TextComp;