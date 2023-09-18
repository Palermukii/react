import './Producto.css';

export function Producto({productos}) {
    return(


        <>
        {productos.map((product,i) => {
            return (
<div key={i} className='Product'>
            <img src={product.imagen} className='Image'/>
                <h1 className='Tittle'>{product.titulo}</h1>
                <h3 className='Price'>{product.precio}</h3>
                <p className='Description'>{product.descripcion}</p>
        </div>
            );
})}
        
        
        </>



    );
  
}


