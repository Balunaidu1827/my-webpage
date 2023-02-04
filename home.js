import React from 'react';
import {Outlet} from 'react-router-dom';
import StyledNavbar from "./StyledNavbar";
const Home = () => {
  return (
    <div>
    <StyledNavbar />
      <h1>Home Page</h1>
      <p>Create React App doesn't include page routing.
React Router is the most popular solution.</p>
      <Outlet/>
    </div>
  );
};

export default Home;