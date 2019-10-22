import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Media = ({ data }) => {
    const { title, image, description, link, github } = data;
    return (
        <div className= 'cardbody'>
            <img src= {image} alt ="project image"></img>
            <h3 className = 'projectTitle'>{title}</h3>
            <p className = 'projectDesc'>{description}</p>
            <a className = 'projectLinks' href = {link} target= "_blank">See Project</a>
            <a className = 'projectLinks' href = {github} target= "_blank">See Repo</a>
        </div>
    )
}
export default Media