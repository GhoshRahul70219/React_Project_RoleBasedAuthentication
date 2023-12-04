import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

import Role from "./pages/role" ;
import Permission from "./pages/permission" ;
import User from "./pages/user" ;
import Home from "./pages/home" ;
import Header from "./components/Header";



function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/role" element={<Role/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/permission" element={<Permission/>}/>
        </Routes>
    </div>
  );
}

export default App;
