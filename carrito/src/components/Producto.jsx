import React from 'react';

const Producto = ({producto, productos, carrito, agregarProducto}) => {

    // Extraigo los valores del producto
    const {id, articulo, precio} = producto;

    // Funcion para seleccionar un producto
    const seleccionarProducto = (id) => {
        const producto = productos.filter( // probar con find() en lugar de filter()
            producto => producto.id === id
        )[0];
        agregarProducto([...carrito, producto]);
        // console.log(carrito);
    };

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