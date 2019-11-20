import React from 'react';
import {NavLink} from 'react-router-dom'
import Socials from './socials';
const NavBar  = () =>{
 return(

     <div className= "navbar">
         <h3 className= 'title'> Boyang Matsapola</h3>
         <Socials></Socials>
         <div className = "links" >
         <NavLink exact to = "/home" className="linkItems" >Home</NavLink>
         <NavLink exact to ='/projects' className="linkItems" >Projects</NavLink>
         <NavLink  exact to ='/contact' className="linkItems">Contact</NavLink>
         </div>
     </div>
 )

}

export default NavBar