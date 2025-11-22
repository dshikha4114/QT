import "./Users.css";
import StaticContent from "./static-content/StaticContent";
import Gender from "./gender/Gender";
import User from "./user/User";

import {useState} from 'react';
import  axios from 'axios';

import usersContext from "./usersContext";


// function Users(){
//     const [users,setUsers]=useState([]);
//     const [buttonDisabled, setButtonDisabled]=useState(false);
//     const [genderFilter,setGenderFilter]=useState("all");


    
//     const getUsers = ()=>{
//         axios.get("https://randomuser.me/api/?results=30").then((res)=>{
//             console.log(res.data.results);
//             setUsers(res.data.results);
//             ///disable the button once data is fetched
//             setButtonDisabled(true);
//         }).catch((error)=>{
//             alert("Failed to fetch users");
//             console.log(error);
//         });

//     }
    
//     //filter users based on gender selection
//     const filteredUsers=users.filter((user)=>{
//         if(genderFilter==="all") return true;
//         return user.gender===genderFilter;
//     });


//     return <div className="usersContainer">
//         <h1>Users information</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima autem facere pariatur! Molestias, officiis ea deserunt officia accusamus laboriosam error consequuntur optio aperiam nemo voluptatum neque enim! Ipsa aliquid facilis quia necessitatibus tempora rerum quasi obcaecati eveniet, rem mollitia minus provident expedita sint voluptates magnam eos ipsum. Natus, necessitatibus rerum, veritatis provident consequatur repellat voluptatum at maiores nostrum, facilis assumenda maxime consequuntur quo harum. Quis aliquid dolores distinctio modi quas. Pariatur ad nostrum odit eum tempora sed rem, culpa error libero dicta nisi fuga autem sint officia doloribus officiis mollitia? A sequi id incidunt ipsa modi nesciunt accusantium inventore.</p>
//         <button disabled={buttonDisabled} onClick={getUsers}>Get Users</button>



//         {/* Only show radio button when there is data */}
//         {users.length>0 && (
//             <div className="genderContainer">
//             <div>
//                 <input type="radio" name="gender" value="all" checked={genderFilter==="all"} onChange={()=>{setGenderFilter("all")}}/>  {/*defaultChecked*/}
//                 <label>All</label>
//                 </div>
//             <div>
//                 <input type="radio" name="gender" value="male" checked={genderFilter==="male"} onChange={()=>{setGenderFilter("male")}}/>
//                 <label>Male</label>
//             </div>
//             <div>
//                 <input type="radio" name="gender" value="female" checked={genderFilter==="female"} onChange={()=>{setGenderFilter("female")}}/>
//                 <label>Female</label> 
//             </div>
//         </div>
//         ) }
        

//         <h2 style={{color:"orange", textAlign:"center"}}>Number of users:{filteredUsers.length}</h2>

//         <div className="usersDataContainer">
//             {
//                 filteredUsers.map((element)=>{//here instead of users , filtered users taken according to the radio button clicked.
//                     //element here is object which contains 30
//                     //element= {gender:"m/f",picture:{l:"",m:""},name:{title:"",first:"",last:""}}
//                     return(
//                         <div className="card">
//                             <img src={element.picture.medium} width={250} height={250}/>
//                             <h3>{`${element.name.title} ${element.name.first} ${element.name.last}`}</h3>
//                             <p style={{color:"green"}}>{element.gender}</p>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit!</p>
//                         </div>
//                     );
//                 })
//             }

//         </div>
//     </div>
// }

function Users(){
    const [users,setUsers]=useState([]);
    const [buttonDisabled, setButtonDisabled]=useState(false);
    const [genderFilter,setGenderFilter]=useState("all");

        const getUsersData = ()=>{
        axios.get("https://randomuser.me/api/?results=50").then((res)=>{
            console.log(res.data.results);
            setUsers(res.data.results);
            ///disable the button once data is fetched
            setButtonDisabled(true);
        }).catch((error)=>{
            alert("Failed to fetch users");
            console.log(error);
        }); 

    }

          //filter users based on gender selection
          const filteredUsers=users.filter((user)=>{
            if(genderFilter==="all") return true;
            return user.gender===genderFilter;
        });

    return <div>
        

        <usersContext.Provider value={{data:[users, buttonDisabled,genderFilter,setGenderFilter],fnGetUser:[getUsersData,filteredUsers]}}> {/*<usersContext.Provider value={{data:state,fnGetUser:getUsersData}}>   here key name can be anything if we want we can keep key name and value name same , if it is same then no need to write the double <usersContext.Provider value={{state:state,geetUsersData:getUsersData}}> we can write only once like <usersContext.Provider value={{state,getUsersData}}> */}
                    <StaticContent/>
                    <Gender/>
                    <User/>
        </usersContext.Provider>
        
    </div>
}


export default Users;