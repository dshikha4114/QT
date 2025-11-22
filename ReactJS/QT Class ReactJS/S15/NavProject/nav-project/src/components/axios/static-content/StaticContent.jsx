import "./StaticContent.css";
import {useContext} from "react";
import usersContext from "../usersContext";
function StaticContent(){
    const {data,fnGetUser}=useContext(usersContext);
    const [,buttonDisabled]=data;
    const [getUsersData]=fnGetUser;
    return <div className="usersContainer">


         <h1>Users information</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima autem facere pariatur! Molestias, officiis ea deserunt officia accusamus laboriosam error consequuntur optio aperiam nemo voluptatum neque enim! Ipsa aliquid facilis quia necessitatibus tempora rerum quasi obcaecati eveniet, rem mollitia minus provident expedita sint voluptates magnam eos ipsum. Natus, necessitatibus rerum, veritatis provident consequatur repellat voluptatum at maiores nostrum, facilis assumenda maxime consequuntur quo harum. Quis aliquid dolores distinctio modi quas. Pariatur ad nostrum odit eum tempora sed rem, culpa error libero dicta nisi fuga autem sint officia doloribus officiis mollitia? A sequi id incidunt ipsa modi nesciunt accusantium inventore.</p>
         <button disabled={buttonDisabled}  onClick={()=>{
                            getUsersData();
         }}>Get Users</button>
         {/*<button disabled={buttonDisabled} onClick={getUsers}>Get Users</button>*/}
    </div>
}
export default StaticContent;