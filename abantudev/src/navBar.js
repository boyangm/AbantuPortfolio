import React, {useContext, useEffect, useState} from 'react';
import {NavLink, Link} from 'react-router-dom'
import Socials from './socials';
import {WebState} from './WebState'
import BoyangRes from '../src/assets/Boyang_Matsapola_-_Web_Developer .pdf'
const NavBar  = () =>{
    const context = useContext(WebState)
    const [navStatus, setNavStatus] = useState('navbar')
    const [code, setCode] = useState('ffffff')
    const {status} = context

    const handleToggle = () =>{
        if (navStatus === 'navbar' ){
            setNavStatus('navbar move')
        }else{
            setNavStatus('navbar')
        }
    }
    const handleScroll = () =>{
        console.log(window.scrollY)
        if (window.scrollY > 400){
            setCode('FD9535')
        }else{
            setCode('ffffff')
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

 return(
    <div>
        <img onClick = {handleToggle} className= 'toggle' src={`https://img.icons8.com/ios-filled/50/${code}/menu.png`}></img>

     <div className={navStatus}>
         <NavLink onClick ={handleToggle}  exact to = "/home" className="title" >Boyang Matsapola</NavLink>
         {/* <h3 className= 'title'> Boyang Matsapola</h3> */}
         <div className = "links" >
         <NavLink onClick ={handleToggle} exact to ='/contact' className="linkItems">Contact</NavLink>
         <Link onClick ={handleToggle} className={`linkItems ${status}`} to= {BoyangRes} target= "_blank" download>Resume</Link>
         </div>
         <Socials></Socials>
     </div>

    </div>
 )

}

export default NavBar