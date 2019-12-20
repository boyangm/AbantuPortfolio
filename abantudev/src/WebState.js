import React, {useState} from 'react'




export const WebState = React.createContext()

export const Provider  = (props) =>{
    const [status, setStatus] = useState('hidden')

const handlePoint = (elem, num) =>{
   const point = elem.getBoundingClientRect().top
    if(point <= num ){
        elem.classList.add('Loaded')
    }
}
const handleResume = (elem, num) =>{
   const point = elem.getBoundingClientRect().top
    if(point < 0  ){
        setStatus('')
    }else{
        setStatus('hidden')
    }
}

    return(
        <WebState.Provider value = {{handlePoint, handleResume, status}}>
            {props.children}
        </WebState.Provider>
    )
}


export const Consumer = WebState.Consumer;

