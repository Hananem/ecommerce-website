import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {AppProvider} from "./context/ProductsContext"
import {FilterContextProvider} from "./context/Filter_Context"
import {CartProvider} from "./context/Cart_Context"
import {WhichListProvider} from "./context/WhichList_Context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
     <BrowserRouter>

  <AppProvider>
  <FilterContextProvider>
  <CartProvider>
  <WhichListProvider>
  <App />
  </WhichListProvider>

  </CartProvider>
      
  </FilterContextProvider>
</AppProvider>
     </BrowserRouter>

  </React.StrictMode>
);


