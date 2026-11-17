import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="left">
          <h2>Logo</h2>
        </div>
        <div className="right">
          <Link to={"/addstudent"}><h2>Add</h2></Link>
          <Link to={"/viewstudent"}><h2>View</h2></Link>
        </div>
      </div>
    </>
  )
}

export default Navbar