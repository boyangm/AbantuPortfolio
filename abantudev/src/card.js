import React, { useContext, useEffect, useRef, useState} from 'react';
import {WebState} from './WebState'

const Media = (props) => {
    const { key, number,title, image, description, link, github } = props.data;
    const idRef = useRef(null)
    const context = useContext(WebState)
    const [mounted, setMounted ] = useState(true)
    const {handlePoint} = context
    const handlescroll = () =>{
        handlePoint(idRef.current, 650)

    }

    useEffect(()=>{
       
            window.addEventListener('scroll',  handlescroll)

        return () =>window.removeEventListener('scroll', handlescroll)
    })
    return (
        <div className='cardbody' ref={idRef}>
                <img src={image} alt="description of event"></img>
                <h3 className='projectTitle'>{title}</h3>
                <p className='projectDesc'>{description}</p>
                <div className="projectLinksWrap">
                    <a className='projectLinks' href={link} rel="noopener noreferrer" target="_blank">See Project</a>
                    <a className='projectLinks' href={github} rel="noopener noreferrer" target="_blank">See Repo</a>
                </div>
            </div>
    )
}
export default Media