import StyledNavbar from "./StyledNavbar";
const Dashboard = ({ user }) => {
  return (
    
    <section className='section'>
      <StyledNavbar/>
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
