import React, {useContext} from 'react';
import {NavLink, Link} from 'react-router-dom'
import Socials from './socials';
import {WebState} from './WebState'
import BoyangRes from '../src/assets/BoyangResume.pdf'
const NavBar  = () =>{
    const context = useContext(WebState)
    const {status} = context
 return(

     <div className= "navbar">
         <NavLink exact to = "/home" className="title" >Boyang Matsapola</NavLink>
         {/* <h3 className= 'title'> Boyang Matsapola</h3> */}
         <div className = "links" >
         <NavLink  exact to ='/contact' className="linkItems">Contact</NavLink>
         <Link className={`linkItems ${status}`} to= {BoyangRes} target="_blank" download>Resume</Link>
         </div>
         <Socials></Socials>
     </div>
 )

}

export default NavBar