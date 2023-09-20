import React from 'react'
import {useState} from 'react'

const Relojj = () => {

const date = new Date();
const [time, setTime] = useState(date)

setInterval(() => {
    setTime(new Date);
})
const day = time.getDate()
const month = time.getMonth() + 1;
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
  return (
    <div>
<p>{day}  {month}  {hours}:{minutes}:{seconds}</p>



    </div>
  )
}
export default Relojj