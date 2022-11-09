import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="container">  
        <nav>
           <ul>
            <li style={{float:'left',fontSize:'20px',background:"#04AA6D",paddingRight:'100px'}}><a href="">Domain</a></li>
            <li><a href="">New post</a></li>
            <li><a href="">About</a></li>
            <li><a href="" className="active"> Home</a></li>
           </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
