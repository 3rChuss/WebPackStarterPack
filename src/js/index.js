import '../css/style.scss';


const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

let html = '';
carrito.forEach(producto => {
    html += `
        <li>${producto}</li>
    `
});

document.querySelector('#productos').innerHTML = html;

