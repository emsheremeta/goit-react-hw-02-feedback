import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import PhoneApp from 'components/PhoneApp'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <PhoneApp/>
  </React.StrictMode>
);
