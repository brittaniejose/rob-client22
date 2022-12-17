import { Outlet, Link } from "react-router-dom";
import AppTitle from './AppTitle'
import React from "react";
{/* <AppTitle /> */}
const Layout = () => {
  return (
    <div className="App">
        <nav className="App-header">
        <Link to="/"><h1>React-O-Blog</h1></Link>
        <ul className="navlinks">
          <li>
            <Link to="/signup" style={{margin: 20}}>Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
