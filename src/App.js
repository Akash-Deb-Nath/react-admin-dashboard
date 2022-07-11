import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from './Pages/UserList/UserList';
import User from './Pages/User/User';
import NewUser from './Pages/NewUser/NewUser';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';

function App() {
  return (
    <BrowserRouter>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/users" element={<UserList></UserList>} />
          <Route path="/user/:userId" element={<User></User>} />
          <Route path="/newUser" element={<NewUser></NewUser>} />
          <Route path="/products" element={<ProductList></ProductList>} />
          <Route path="/product/:productId" element={<Product></Product>} />
          <Route path="/newProduct" element={<NewProduct></NewProduct>} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
