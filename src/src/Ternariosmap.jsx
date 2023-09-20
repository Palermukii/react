export function Ternariosymap () {

    const valores = [
        {nombre: "Papu", estado:false},
        {nombre: "Nagito", estado:true},
        {nombre: "Monte", estado:true},
        {nombre: "Fran", estado:false},
        {nombre: "Maximaldo", estado:true}
    ];
return(
    <div>
        <ul>
               {valores.map((valor, i) => {return(
                <li key={i}>{valor.nombre} {valor.estado ? "Nagito" : "No nagito"}</li>
               )})}
        </ul>
    </div>
)
}