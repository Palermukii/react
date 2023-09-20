import React, { useState } from "react";

const Tareas = () => {
  const [tareas, setTareas] = useState("");
  const [tareasList, setTareasList] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (tareas.trim() !== "") {
      setTareasList([{ nombre: tareas, id: tareasList.length }, ...tareasList]);
      setTareas("");
    }
  };

  const onInputChange = (event) => {
    setTareas(event.target.value);
  };


  const borrar = (tarea) => {
    let papu = tareasList.filter(i => i.id != tarea.id);
    setTareasList(papu)
  }


  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <input
          type="text"
          placeholder="Escribe una tarea"
          onChange={onInputChange}
          value={tareas}
        />

        <button type="submit">Agregar</button>
      </form>
      <div>
        <ul>
          {tareasList.map((tarea, index) => (
            <div key={index}>
              <li>{tarea.nombre}</li>
              <button onClick={() => borrar(tarea)}>Borrar</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tareas;




