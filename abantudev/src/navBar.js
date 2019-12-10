import React from 'react';
import {NavLink} from 'react-router-dom'
import Socials from './socials';
const NavBar  = () =>{
 return(

     <div className= "navbar">
         <NavLink exact to = "/home" className="title" >Boyang Matsapola</NavLink>
         {/* <h3 className= 'title'> Boyang Matsapola</h3> */}
         <div className = "links" >
         <NavLink exact to ='/projects' className="linkItems" >Projects</NavLink>
         <NavLink  exact to ='/contact' className="linkItems">Contact</NavLink>
         </div>
         <Socials></Socials>
     </div>
 )

}

export default NavBar