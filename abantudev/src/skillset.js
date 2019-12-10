import React from 'react'

const Skillset = (props) =>{
const {data} = props;

    return(
        <div className = 'skillsCont'>
            <h3 className = 'alt subHeading'>Skill Set</h3>
            <h5>{data}</h5>
        </div>
    )
}

export default Skillset