import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Role from "./pages/role" ;
import Permission from "./pages/permission" ;
import User from "./pages/user" ;
import Home from "./pages/home" ;
function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="menu">
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/user">User</Link> </li>
          <li> <Link to="/role">Role</Link> </li>
        </ul>
    </div>
    <>
    <Routes>
          <Route path="/" component={Home}/>
          <Route path="/role" component={Role}/>
          <Route path="/user" component={User}/>
          <Route path="/user" component={Permission}/>
    </Routes>
           
    </>
  </div>
  );
}

export default App;
