import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CreateProduct, Home, LoginPage, MyProducts } from "./routes/routes";
import SignupPage from './pages/SignupPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/createproduct' element={<CreateProduct />}/>
          <Route path='myproducts' element={<MyProducts />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
