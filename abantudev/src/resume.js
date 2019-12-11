import React from 'react'
import {Link} from 'react-router-dom'
import BoyangRes from '../src/assets/BoyangResume.pdf'
const Resume = () => {

    return (
       <div className = 'downloadCont'>
        <Link className='subHeading resume' to= {BoyangRes} target="_blank" download>Download my Resume</Link>
       </div>
    )
}

export default Resume