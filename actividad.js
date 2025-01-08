/**********************************
 * ACTIVIDAD
 *  *********************************/

// Crear el inventario inicial
const inventario = {
    producto1: { nombre: "Manzanas", precio: 0.5, cantidad: 100 },
    producto2: { nombre: "Naranjas", precio: 0.6, cantidad: 80 },
    producto3: { nombre: "Plátanos", precio: 0.4, cantidad: 120 },
    producto4: { nombre: "Peras", precio: 0.7, cantidad: 50 }
};

Object.seal(inventario);

// Función para vender unprudcto 
function venderProducto(nombre, cantidad) {
 
    for (let clave in inventario) {
        if (inventario[clave].nombre === nombre) {
            if (inventario[clave].cantidad >= cantidad) {
                inventario[clave].cantidad -= cantidad;
                console.log(`Venta realizada: ${cantidad} ${nombre}(s) vendidas. Quedan ${inventario[clave].cantidad} en inventario.`);
            } else {
                console.log(`No hay suficiente stock de ${nombre}. Quedan ${inventario[clave].cantidad} unidades.`);
            }
            return;
        }
    }
}

//Implementa una función para aplicar un descuento a todos los productos:

//La función debe aceptar un porcentaje de descuento y reducir el precio de todos 
// los productos en base a este porcentaje. debe mostrar un mensaje de que productos recibieron estedescuento

function aplicarDescuento(porcentajeDescuento) {
    console.log(`Aplicando un descuento del ${porcentajeDescuento}% a los productos:`);
    for (let clave in inventario) {
        const producto = inventario[clave];
        const descuento = producto.precio * (porcentajeDescuento / 100);
        producto.precio -= descuento;
        console.log(`- ${producto.nombre}: descuento de $${descuento.toFixed(2)}, nuevo precio: $${producto.precio.toFixed(2)}`);
    }
}

//Asegurese que los precios no sean negativos

function asegurarPrecios() {
    for (let clave in inventario) {
        if (inventario[clave].precio < 0) {
            inventario[clave].precio = 0;
        }
    }
}

aplicarDescuento(10);

venderProducto("Manzanas", 50);
venderProducto("Peras", 30);
venderProducto("Plátanos", 20);
venderProducto("Manzanas", 100);

console.log(inventario.producto1)
console.log(inventario.producto2)
console.log(inventario.producto3)
console.log(inventario.producto4)

asegurarPrecios();


