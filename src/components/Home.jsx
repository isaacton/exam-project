import React from 'react'
import { NavLink } from 'react-router-dom';
 const Home = () => {
  return (
    <div>
    <h1>This is the Home page...</h1> <br />
    <NavLink to='UserPage'> users page</NavLink><br />
    <NavLink to='PageNotFound'>error page</NavLink><br />
    <NavLink to='ErrorBoundary'>error boundary page</NavLink>
    </div>
  )
}
export default Home;