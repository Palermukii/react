import './Header.css';
import { useState } from 'react';
import Logo from './img/LPF.png';
export default function Header({titulo}) {

    const links = [
        {nombre:"Colgala", url:"https://moto.mercadolibre.com.ar/MLA-1465003864-royal-enfield-super-meteor-650-astral-blue-reserva-ya-_JM#position=9&search_layout=grid&type=item&tracking_id=6996ac16-8150-456a-9409-166dc47afb56"},
        {nombre:"Mirala", url:"https://lpfplay.com/"},
        {nombre: "Clubes", url:"https://www.ligaprofesional.ar/clubes"},
        {nombre:"Copa",  url:"https://www.ligaprofesional.ar/copa-2023/"},
        {nombre:"Proyeccion", url:"https://www.ligaprofesional.ar/copa-proyeccion-2023/"},
        {nombre:"Juveniles", url:"https://www.ligaprofesional.ar/juveniles/"},
        {nombre:"Noticias", url:"https://www.ligaprofesional.ar/noticias/"},
        {nombre:"LPF Data", url:"https://www.ligaprofesional.ar/lpf-data/"},

    ]  

    const [num, setNum] = useState(1);
return(
    <>
      <div className='Header-header'>
      
      <img className='Logo' src={Logo} alt="" />
  <ul className='Lista-header'>
      {
      links.map(
          (link,i) => (
                  <li key={i} className='Item-lista-header'><a target="blank" href={link.url}>{link.nombre}</a></li>
           ) 
              )
      }
  </ul>
  
      </div>   
      <h1 className='Titulo15' onClick={()=>setNum(Math.floor(Math.random() * 1000 + 1))}><span >{titulo}</span>    <span>{num}</span></h1>
  
    </>


)

}
