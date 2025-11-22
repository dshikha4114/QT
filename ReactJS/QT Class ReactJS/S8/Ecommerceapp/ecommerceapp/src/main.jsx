import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import Header from './Header.jsx';


createRoot(document.getElementById('root')).render([<App/>,<Header/>])



//import {createRoot} from 'react-dom/client';
//const root=createRoot(document.getElementById('root'));
//root.render(<p>This is my first paragraph in react application</p>)

