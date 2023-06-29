/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';
import Producto from './Producto';

const Main = () => {
    // Creamos nuestrlista de productos mediante un hook
    const [productos, guardarProductos] = useState(
        [
        { id: 1, articulo: "Jarro termico", precio: 2500 },
        { id: 2, articulo: "Decantador", precio: 2000 },
        { id: 3, articulo: "Tabla picadas", precio: 5200 },
        { id: 4, articulo: "Mate calabaza", precio: 3400 },
        { id: 5, articulo: "Poncho pampa", precio: 12500 },
        { id: 6, articulo: "Boleadoras", precio: 3500 }
        ]
    );

    // Creamos el carrito
    const [carrito, agregarProducto] = useState([]);

    return (
        <div>
            <h1>Listado de productos</h1>
            {
                productos.map( producto => (
                    <Producto 
                        producto={producto}
                        productos={productos}
                        key={producto.id}
                        carrito={carrito}
                        agregarProducto={agregarProducto}
                    />
                ))
            }
        </div>
    );
}

export default Main;