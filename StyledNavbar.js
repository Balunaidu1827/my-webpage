import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
      <NavLink
        to='/Support'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Support
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login 
      </NavLink>
    </nav>
    <hr></hr>
    </div>
  );
};
export default Navbar;
