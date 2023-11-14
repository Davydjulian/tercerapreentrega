let frutasConPrecios = {
    "Manzana": 3000,
    "Banana": 1500,
    "Naranja": 2000,
    "Fresa": 5000,
    "Pera": 2500,
    "Kiwi": 3500,
    "Uva": 6000,
    "Mango": 4500,
    "Cereza": 8000,
    "Piña": 7000
};

let carritoDeCompras = obtenerDeStorage('carrito') || [];

let frutasLista = document.getElementById("frutas-lista");
let carritoNotificacion = document.getElementById("carrito-notificacion");
let btnVerCarrito = document.getElementById("ver-carrito");
let datosComprador = document.getElementById("datos-comprador");
let btnFinalizarCompra = document.getElementById("btn-finalizar");
let resumenCompra = document.getElementById("resumen-compra");

for (let fruta in frutasConPrecios) {
    let elementoFruta = document.createElement("div");
    elementoFruta.className = "fruta";
    elementoFruta.innerHTML = `<strong>${fruta}</strong><br>Precio: $${frutasConPrecios[fruta].toLocaleString()} COP<br><button data-fruta="${fruta}">Agregar al Carrito</button>`;
    frutasLista.appendChild(elementoFruta);
}

mostrarNotificacionCarrito();

frutasLista.addEventListener("click", function(event) {
    let botonCarrito = event.target.closest("button[data-fruta]");
    if (botonCarrito) {
        let fruta = botonCarrito.getAttribute("data-fruta");
        agregarAlCarrito(fruta);
    }
});

btnVerCarrito.addEventListener("click", function() {
    datosComprador.style.display = "block";
    btnFinalizarCompra.style.display = "block";
});

btnFinalizarCompra.addEventListener("click", finalizarCompra);

function agregarAlCarrito(fruta) {
    carritoDeCompras.push(fruta);
    guardarEnStorage('carrito', carritoDeCompras);
    mostrarNotificacionCarrito();
}

function finalizarCompra() {
    let nombre = document.getElementById("nombre").value || "Nombre no especificado";
    let telefono = document.getElementById("telefono").value || "Teléfono no especificado";
    let direccion = document.getElementById("direccion").value || "Dirección no especificada";

    let mensaje = `¡Felicitaciones! Tu compra será enviada a:\nNombre: ${nombre}\nTeléfono: ${telefono}\nDirección: ${direccion}`;
    alert(mensaje);

    mostrarNotificacionCompra();

    carritoDeCompras = [];
    guardarEnStorage('carrito', carritoDeCompras);

    mostrarNotificacionCarrito();
}

function mostrarNotificacionCarrito() {
    carritoNotificacion.innerHTML = `Carrito: ${carritoDeCompras.length} frutas`;
}

function mostrarNotificacionCompra() {
    let resumenHTML = "<h2>Resumen de la Compra</h2>";
    let totalCompra = 0;

    carritoDeCompras.forEach(fruta => {
        let precio = frutasConPrecios[fruta];
        resumenHTML += `<p>${fruta} - $${precio.toLocaleString()} COP</p>`;
        totalCompra += precio;
    });

    resumenHTML += `<p>Total: $${totalCompra.toLocaleString()} COP</p>`;

    let nombre = document.getElementById("nombre").value || "Nombre no especificado";
    let telefono = document.getElementById("telefono").value || "Teléfono no especificado";
    let direccion = document.getElementById("direccion").value || "Dirección no especificada";

    resumenHTML += `<h3>Datos del Comprador:</h3>`;
    resumenHTML += `<p>Nombre: ${nombre}</p>`;
    resumenHTML += `<p>Teléfono: ${telefono}</p>`;
    resumenHTML += `<p>Dirección: ${direccion}</p>`;

    resumenCompra.innerHTML = resumenHTML;
}

function guardarEnStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

function obtenerDeStorage(clave) {
    let valor = localStorage.getItem(clave);
    return valor ? JSON.parse(valor) : null;
}