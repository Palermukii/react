import React, { useState, useEffect } from "react";

const Tareas = () => {
  const [tareas, setTareas] = useState();
  const [tareasList, setTareasList] = useState([]);

  const onImputChange = (event) => {
    setTareas(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (tareas.trim() !== "") {
      setTareasList([tareas, ...tareasList]);
      setTareas("");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <input type="text" onChange={onImputChange} value={tareas} />
        <button type="submit">Agregar</button>
      </form>
      <div>
        <ul>
          {tareasList.map((tarea, index) => (
            <div>
            <li key={index}>{tarea}</li>
                
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Tareas;
