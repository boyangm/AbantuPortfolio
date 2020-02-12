import React from 'react'
import {Link} from 'react-router-dom'
import BoyangRes from '../src/assets/Boyang_Matsapola_-_Web_Developer .pdf'
const Resume = () => {

    return (
       <div className = 'downloadCont'>
        <Link className='subHeading resume' to= {BoyangRes} target="_blank" download>Download My Resume</Link>
       </div>
    )
}

export default Resume