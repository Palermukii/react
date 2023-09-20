    import React from 'react';
    import {useState, useEffect} from 'react';
    
    export const Imagenes = () => {

        const [url, setUrl] = useState('https://source.unsplash.com/random?landscape');
        const [busqueda, setBusqueda] = useState('landscape')

      const handleChange = (e) => {
        setBusqueda(e.target.value)
        setUrl("https://source.unsplash.com/random?landscape" + busqueda)
      }  

        // useEffect(() => {
        //     fetch("https://source.unsplash.com/random?" + busqueda )
        //     .then(response => response.json)
        //     .then(data => setUrl(data))
        // })
    
      return (
        <div>

        <input type="text" value={busqueda} onChange={(e) => handleChange(e)} />
        <div>
            <img style={{width : "100px"}} src={url + "&1"} alt="" />
            <img style={{width : "100px"}} src={url + "&2"} alt="" />
            <img style={{width : "100px"}} src={url + "&3"} alt="" />
            <img style={{width : "100px"}}src={url + "&4"} alt="" />
            <img style={{width : "100px"}} src={url + "&5"} alt="" />
            <img style={{width : "100px"}} src={url + "&6"} alt="" />

        </div>

        </div>
        
      )
    }
    