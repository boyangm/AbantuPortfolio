import React from 'react'
import {Link} from 'react-router-dom'
const Resume = () => {

    return (
       <div className = 'downloadCont'>
        <Link className='subHeading resume' to="/files/myfile.pdf" target="_blank" download>Download my Resume</Link>
       </div>
    )
}

export default Resume