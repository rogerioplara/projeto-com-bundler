import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './index.css';
import { ConfigProvider } from 'antd';
import ptBr from 'antd/locale/pt_br';

// customizacao do texto
ptBr.DatePicker.lang.placeholder = 'Selecionar dia';

ReactDOM.createRoot(document.getElementById('root')).render(
  // utilização do locale ptbr
  <ConfigProvider locale={ptBr}>
    <App />
  </ConfigProvider>
);
