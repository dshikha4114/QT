import "./App.css";
import Nav from './components/nav/Nav.jsx';
//import StateCom from "./components/state-concept/StateComp.jsx";
//import StateComp2 from "./components/state-concept/StateComp2.jsx";
//import UserState from "./components/state-concept/UserState.jsx";
//import Mapex4 from "./components/map/Mapex4.jsx";
import Users from "./components/axios/Users.jsx";
//import ButtonComp from "./components/parent-child/ButtonComp.jsx";
//import A from "./components/context-api/A.jsx";



function App(){
  return <div>
        <Nav/>
        <Users/>
               
  </div>
}

export default App;