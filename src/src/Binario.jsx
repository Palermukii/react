import React from 'react'
import {useState} from 'react'

export const Binario = () => {
    const [num, setNum] = useState(0)


    return (
    
    
    <>
    <input value={num} onChange={(e) => {setNum(+e.target.value)}}  />
    <p>{num.toString(2)}</p>
    
    </>
    
    )
}
