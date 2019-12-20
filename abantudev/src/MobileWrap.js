import React , {useContext, useRef, useEffect, useState} from 'react'
import {WebState} from './WebState'
import { set } from 'mongoose';

const MobileWrap = () => {
    const mobileRef = useRef(null)
    const context = useContext(WebState)
    const {handlePoint} = context
    const [mounted, setMounted ] = useState(true)
    const handleScroll =() =>{
        handlePoint(mobileRef.current, 250)
    }
    useEffect(()=>{
      
            window.addEventListener('scroll', handleScroll)

    
        return  () => window.removeEventListener('scroll', handleScroll)
    })
    return (
        <div className = 'mobileWrap' ref = {mobileRef}>
        <iframe className = 'screen' src="http://mernracr.herokuapp.com/" seamless width="450" height="900"></iframe>
        </div>
    )
}

export default MobileWrap
