import React from 'react'
import { get } from 'http';




export const WebState = React.createContext()

export const Provider  = (props) =>{

const handlePoint = (elem, num) =>{
   const point = elem.getBoundingClientRect().top
    console.log(`${elem} is at ${point}`)
    if(point <= num ){
        elem.classList.add('Loaded')
    }
}

    return(
        <WebState.Provider value = {{handlePoint}}>
            {props.children}
        </WebState.Provider>
    )
}


export const Consumer = WebState.Consumer;

