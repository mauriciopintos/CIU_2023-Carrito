import React from 'react';

const Producto = ({producto, productos}) => {

    // Extraigo los valores del producto
    const {id, articulo, precio} = producto;

    // Funcion para seleccionar un producto
    const seleccionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id
        ).pop();
        console.log(producto);
    }

    return ( 
        <>
            {id} | {articulo} | {precio} <br/>
            <button
                className="btn btn-primary mb-1"
                type='button'
                onClick={ () => seleccionarProducto(id) }
            >Comprar</button>
            <br/>
        </>
    );
}
 
export default Producto;