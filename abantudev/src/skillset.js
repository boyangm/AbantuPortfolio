import React ,{useContext, useEffect, useRef}from 'react'
import {WebState} from './WebState'

const Skillset = (props) =>{
const {data} = props;
const context = useContext(WebState);
const {handlePoint, handleResume} = context;
const skillRef = useRef(null)

const handleScroll = () =>{
    handlePoint(skillRef.current, 700)
    handleResume(skillRef.current)
   
}
const handleScroll2 = () =>{
   
}


 useEffect(()=>{
     window.addEventListener('scroll', handleScroll)

     return () => window.removeEventListener('scroll', handleScroll)
 })
    return(
        <div className = 'skillsCont'>
            <h3 className = 'alt subHeading'>Skill Set</h3>
            <h5 ref ={skillRef}>{data}</h5>
        </div>
    )
}

export default Skillset