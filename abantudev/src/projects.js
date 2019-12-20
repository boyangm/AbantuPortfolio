import React ,{Component} from 'react';
import {projectList} from './projectlist'
import Media from './card'
import MobileWrap from './MobileWrap'

class Projects extends Component{
    state = {
        projects: projectList
    }

    render(){
        return(  
            <div>
        <div className = 'mediaCont'>

            <h3 className = 'subHeading'>Projects</h3>
            {this.state.projects.map(item =>
            <Media data = {item}></Media>
            )}
        </div>
        <h3 className = 'subHeading'>Projects</h3>
            <MobileWrap></MobileWrap>
            </div>
            )
    }
}

export default Projects