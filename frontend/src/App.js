import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home, LoginPage } from "./routes/routes";
import SignupPage from './pages/SignupPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
