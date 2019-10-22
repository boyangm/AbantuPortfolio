import React ,{Component} from 'react';
import {projectList} from './projectlist'
import Media from './card'

class Projects extends Component{
    state = {
        projects: projectList
    }

    render(){
        return(  
        <div className = 'mediaCont'>
            {this.state.projects.map(item =>
            <Media data = {item}></Media>
            )}
        </div>
            )
    }
}

export default Projects