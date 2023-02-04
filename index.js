import  ReactDOM  from "react-dom/client";
import React from "react";
import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./home";
import About from "./About";
import Products from "./Products";
import Error from "./Error";
import Support from "./Support";
import "./Navbar.css";
import  "./index.css";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Dashboard from "./Dashboard";
function   Index () {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="Products" element={<Products/>}/>
          <Route path="Support" element={<Support/>}/>
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          
          <Route path="*" element={<Error />} />
          
      </Routes>
    </BrowserRouter>
  );
    
  
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);
export default Index
