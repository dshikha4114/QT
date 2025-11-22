import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import mystore from './components/redux/store/store.js';

createRoot(document.getElementById('root')).render(<BrowserRouter><Provider store={mystore}><App/></Provider></BrowserRouter>);

