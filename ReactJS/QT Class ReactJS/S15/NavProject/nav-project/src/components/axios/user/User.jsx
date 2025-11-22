import "./User.css";
import {useContext} from "react";
import usersContext from "../usersContext";
function User(){
    const {fnGetUser}=useContext(usersContext);
    //const [,buttonDisabled]=data;
    const [,filteredUsers]=fnGetUser;
    var index;

    return (
     

        <div className="usersDataContainer">
        {
           filteredUsers.map((element)=>{//here instead of users , filtered users taken according to the radio button clicked.
               //element here is object which contains 30...
               //element= {gender:"m/f",picture:{l:"",m:""},name:{title:"",first:"",last:""}}
               return(
                   <div className="card" key={index + 1}>
                       <img src={element.picture.medium} width={250} height={250}/>
                       <h3>{`${element.name.title} ${element.name.first} ${element.name.last}`}</h3>
                       <p style={{color:"green"}}>{element.gender}</p>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit!</p>
                   </div>
                        );
                    })
        }

        </div>

    );
    
}
export default User;