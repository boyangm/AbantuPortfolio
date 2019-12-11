import React from 'react';
import {text,skills} from './text';
import Skillset from './skillset';
import Profilepic from './assets/boyangProfile.jpg'
import Resume from './resume'
const Home = (props) => {
    const {match} = props;
    return (
        <div className="container">
            <div className="imgCont">
                <h1>Boyang Matsapola</h1>
                <h3>Web Developer</h3>
                <Resume></Resume>
            </div>
            <div className = "main-Content">
               <h2 className = "heading">Bringing Creative Solutions to You</h2>
               <h3 className = "subHeading">About Me</h3>
               <div className='about'>
               <img src={Profilepic}/>
                <p>{text}</p>
               </div>
               <Skillset {...props} data= {skills}></Skillset>
            </div>
        </div>

    )
}
export default Home; 