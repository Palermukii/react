import { useState } from 'react';

export default function Random() {
    const [num, setNum] = useState(1);

    const Clcik = () => {
        setNum(Math.floor(Math.random() * 1000 + 1))
    } 
    return (
        <div>
        <h1 onClick={Clcik}>{num}</h1>
        
        </div>
    )
}