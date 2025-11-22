import Card from "./Compo1.jsx";
import {Navbar} from "./Compo3.jsx";
import {f1} from "./File-1.js";

function Container(){
    f1();
    return(
        <div>
            <Navbar/>
            <Card></Card> //rendering Card Component
            <Card/>         //Rendering Card Component
            <Card></Card>       //Rendering Card Component
            <Card/>     //Rendering Card Component
        </div>
    );
}