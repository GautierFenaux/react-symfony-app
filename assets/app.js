import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './styles/app.css';
import Navbar from './components/Navbar';
    
// ReactDOM.render(<Router><Home /></Router>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </React.StrictMode>
);
