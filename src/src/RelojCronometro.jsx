import React, { useState } from 'react';
import Reloj from './Reloj'; // Importa el componente Reloj
import Cronometro from './Cronometro'; // Importa el componente Cronometro

function RelojCronometro() {
  const [seleccion, setSeleccion] = useState('reloj'); // Estado para controlar la selección

  // Función para cambiar entre las opciones (reloj o cronómetro)
  // const cambiarSeleccion = (nuevaSeleccion) => {
  //   setSeleccion(nuevaSeleccion);
  // };
  function cambiarSeleccion(nuevaSeleccion) {
    setSeleccion(nuevaSeleccion);
  }

  return (
    <div>
      <div>
        {/* Pestaña para el Reloj */}
        <button onClick={() => cambiarSeleccion('reloj')}>Reloj</button>
        {/* Pestaña para el Cronómetro */}
        <button onClick={() => cambiarSeleccion('cronometro')}>Cronómetro</button>
      </div>
      {/* Renderiza el componente seleccionado */}
      {seleccion === 'reloj' ? <Reloj /> : null}
      {seleccion === 'cronometro' ? <Cronometro /> : null}
    </div>
  );
}

export default RelojCronometro;