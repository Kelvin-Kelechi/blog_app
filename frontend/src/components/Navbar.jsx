import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="container">  
        <nav>
           <ul>
            <li style={{float:'left',fontSize:'20px',background:"#04AA6D",paddingRight:'100px'}}><a href="" className="active">Domain</a></li>
            <li><a href="">New post</a></li>
            <li><a href="">About</a></li>
            <li><Link className="active" to="/">Home</Link></li>
           </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
