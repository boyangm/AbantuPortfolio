import React from 'react';
import {Link} from 'react-router-dom'

const NavBar  = () =>{
 return(

     <div className= "navbar">
         <h3 className= 'title'> Abantu Development</h3>
         <div className = "links" >
         <Link  to ='/projects' className="linkItems" >Projects</Link>
         <Link to ='/contact' className="linkItems">Contact</Link>
         <Link to = "/" className="linkItems" >Home</Link>
         </div>
     </div>
 )

}

export default NavBar