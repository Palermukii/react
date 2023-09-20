import './App.css';
import Contador from './Contador';
import Header from './Header';
import {Producto} from './Producto';
import Random from './Random';
import Tareas from './Tareas';
import Reloj from './Reloj';
import Cronometro from './Cronometro';
import { Ternariosymap } from './Ternariosmap';
import RelojCronometro from './RelojCronometro';
import { Imagenes } from './Imagenes';
import Pokemon from './Pokemon';
import Relojj from './Relojj';
import { Binario } from './Binario';
import { Futbol } from './Futbol';
export default function App() {


  const productos= [
    {titulo: "NVIDIA RTX 2060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_714995-MLA54486481781_032023-W.webp", precio:"$274000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2060 SUPER 8GB OC EDITION"},
    {titulo: "NVIDIA RTX 2080 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_723310-MLA43397955785_092020-W.webp", precio:"$416000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2080 SUPER 16GB"},
    {titulo: "NVIDIA RTX 3060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_918160-MLA45537399318_042021-W.webp", precio:"$410000", descripcion:"TARJETA GRAFICA NVIDIA RTX 3060 SUPER"},
    {titulo: "NVIDIA RTX 2060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_714995-MLA54486481781_032023-W.webp", precio:"$274000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2060 SUPER 8GB OC EDITION"},
    {titulo: "NVIDIA RTX 2060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_714995-MLA54486481781_032023-W.webp", precio:"$274000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2060 SUPER 8GB OC EDITION"},
    {titulo: "NVIDIA RTX 2060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_714995-MLA54486481781_032023-W.webp", precio:"$274000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2060 SUPER 8GB OC EDITION"},
    {titulo: "NVIDIA RTX 2060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_714995-MLA54486481781_032023-W.webp", precio:"$274000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2060 SUPER 8GB OC EDITION"},
    {titulo: "NVIDIA RTX 2060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_714995-MLA54486481781_032023-W.webp", precio:"$274000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2060 SUPER 8GB OC EDITION"},
    {titulo: "NVIDIA RTX 2060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_714995-MLA54486481781_032023-W.webp", precio:"$274000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2060 SUPER 8GB OC EDITION"},
    {titulo: "NVIDIA RTX 2060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_714995-MLA54486481781_032023-W.webp", precio:"$274000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2060 SUPER 8GB OC EDITION"},
    {titulo: "NVIDIA RTX 2060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_714995-MLA54486481781_032023-W.webp", precio:"$274000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2060 SUPER 8GB OC EDITION"},
    {titulo: "NVIDIA RTX 2060 SUPER", imagen:"https://http2.mlstatic.com/D_NQ_NP_714995-MLA54486481781_032023-W.webp", precio:"$274000", descripcion:"TARJETA GRAFICA NVIDIA RTX 2060 SUPER 8GB OC EDITION"},
  ]
// for(let i = 0;i <=3;i++)
  return (
    <>
    
      <Header titulo="nagito"/>
      <div className="Papu">
      <Producto  productos={productos}/>
      </div>
      <Random/>
      <RelojCronometro/>
      <Cronometro/>
      <Contador/>
      <Ternariosymap/>
      <Tareas/>
      <Imagenes/>
      <Pokemon></Pokemon>
      <Relojj></Relojj>

<Binario></Binario>
<Futbol></Futbol>

    </>
  );
}


