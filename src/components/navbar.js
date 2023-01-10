import React from 'react'
import { Link } from 'react-router-dom';
import "./css/navbar.css"
export default function Navbar() {
  return (
    <>
      <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
       <ul className="nav flex-column text-white w-100">
      <Link to="/ss" class="nav-link h3 text-white my-2">
        Index page
      </Link>
      
      <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      
      <li className="nav-item">
          <Link className="nav-link" to="/suggestion">Suggestion</Link>
         </li>     
         
     </ul>

    </div>
    
    </>
  )
}
