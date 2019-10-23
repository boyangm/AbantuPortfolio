import React from 'react'


const Media = ({ data }) => {
    const { title, image, description, link, github } = data;
    return (
        <div className= 'cardbody'>
            <img src= {image} alt ="description of event"></img>
            <h3 className = 'projectTitle'>{title}</h3>
            <p className = 'projectDesc'>{description}</p>
            <a className = 'projectLinks' href = {link} rel="noopener noreferrer" target= "_blank">See Project</a>
            <a className = 'projectLinks' href = {github} rel="noopener noreferrer" target= "_blank">See Repo</a>
        </div>
    )
}
export default Media