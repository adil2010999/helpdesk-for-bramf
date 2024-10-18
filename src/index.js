import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard/Asidebox';
import Headerup from './header/Header';
import Asidebox from './Dashboard/Asidebox';
import ContentApp from './content/Content';


// import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Headerup/>
    <Asidebox/>
    <ContentApp/>
    
  </React.StrictMode>
);


