import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import Header from "./Header.jsx";

//const root = createRoot(document.getElementById("root"));

//root.render(<h2>Welcome To The React World</h2>);

createRoot(document.getElementById("root")).render([<App/>,<Header/>]);