import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { LoginPage,SignupPage,Home,CreateProduct, MyProducts, Cart, ProductDetails, Profile, CreateAddress } from "./Routes/routes.js"
import "./App.css";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginPage/>}/>  
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/create' element={<CreateProduct />}/>
        <Route path='/myProducts' element={<MyProducts />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='/create-product/:id' element={<CreateProduct />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/create-address' element={<CreateAddress />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
