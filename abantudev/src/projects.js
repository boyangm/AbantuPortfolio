import React, { useContext, useEffect, useRef} from 'react';
import { projectList } from './projectlist'
import Media from './card'
import MobileWrap from './MobileWrap'
import {WebState} from './WebState'



const Projects = (props) => {
    const mobileRef = useRef(null)
    const context = useContext(WebState)
    const {handlePoint} = context
    const handleScroll = () =>{
        handlePoint(mobileRef.current, 400)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <div>
                <h3 className='subHeading'>Projects</h3>
            <div className='mediaCont'>

                {projectList.map(item =>
                    <Media data={item} number ={projectList.indexOf(item)} key={projectList.indexOf(item)}></Media>
                )}
            </div>
            <h3 className='subHeading specialTitle desktop' ref={mobileRef}>My Mobile-First Web App Gig Grab</h3>
            <MobileWrap className = 'desktop'></MobileWrap>
        </div>
    )
}

export default Projects