import React from 'react'
import { useState } from 'react';

export const Futbol = () => {
    
    const equipos = ['River Plate', 'Boca Juniors', 'Racing', 'Independiente', 'San Lorenzo'];
    const [equipoBuscado, setEquipoBuscado] = useState("")
    const [lista, setLista] = useState(equipos)

const onChange = (e) => {
    setEquipoBuscado(e.target.value);

  let array = equipos.filter((cosa) => {
    let s1 = cosa.toLowerCase();
    let s2 = e.target.value.toLowerCase();
    if (s1.startsWith(s2)) return s1;
    else return 0;
  });
  setLista(array);
    
}


  return (
    <div>
<h1>Futbol</h1>
<input type="text" onChange={(e) => onChange(e)} value={equipoBuscado} />
<ul>
    {lista.map((equipo, key) => <li key={key}>
        {equipo}
    </li>)}
</ul>

    </div>
  )
}
