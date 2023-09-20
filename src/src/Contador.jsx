import { useState } from "react";

export default function Contador() {
const [num, setNum] = useState(1);
const borrar = (event) => {
    event.preventDefault()
    setNum(0)
}
const handleClick =  () => {
    setNum(num + 1);
    console.log(num);
}
return(
    <>
    <h3>Contador:</h3>
    <h4>{num}</h4>
    <button onClick={handleClick} onDrag={borrar}>Boton</button>
    <button onClick={borrar}>Borrar</button>
    </>
)
}