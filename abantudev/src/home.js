import React from 'react';
import {text} from './text';
const Home = ({ match }) => {
    return (
        <div className="container">
            <div className="imgCont">
                <h1>Boyang Matsapola</h1>
                <h3>Web Developer</h3>
            </div>
            <div className = "main-Content">
               <h2 className = "heading">Bringing Creative Solutions to You</h2>
               <p>{text}</p>
            </div>
        </div>

    )
}
export default Home; 