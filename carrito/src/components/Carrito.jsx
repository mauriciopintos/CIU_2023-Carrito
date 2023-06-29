import React from 'react';
import Producto from './Producto';

const Carrito = ({carrito}) => {
    return ( 
        <>
            <div className='carrito'>
                <h3>Carrito de compras</h3>
                {carrito.map( producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
        </>
    );
}
 
export default Carrito;