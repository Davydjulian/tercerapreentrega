const productos = [
    //ADIDAS
    {
        id: "adidas-01",
        titulo: "Adidas 01",
        imagen: "./img/adidas/adidas (1).webp",
        categoria: {
            nombre: "Adidas",
            id: "adidas"
        },
        precio: 350000
    },
    {
        id: "adidas-02",
        titulo: "Adidas 02",
        imagen: "./img/adidas/adidas (2).webp",
        categoria: {
            nombre: "Adidas",
            id: "adidas"
        },
        precio: 350000
    },
    {
        id: "adidas-03",
        titulo: "Adidas 03",
        imagen: "./img/adidas/adidas (3).webp",
        categoria: {
            nombre: "Adidas",
            id: "adidas"
        },
        precio: 350000
    },
    {
        id: "adidas-04",
        titulo: "Adidas 04",
        imagen: "./img/adidas/adidas (4).webp",
        categoria: {
            nombre: "Adidas",
            id: "adidas"
        },
        precio: 350000
    },
    {
        id: "adidas-05",
        titulo: "Adidas 05",
        imagen: "./img/adidas/adidas (5).webp",
        categoria: {
            nombre: "Adidas",
            id: "adidas"
        },
        precio: 350000
    },
    {
        id: "adidas-06",
        titulo: "Adidas 06",
        imagen: "./img/adidas/adidas (6).webp",
        categoria: {
            nombre: "Adidas",
            id: "adidas"
        },
        precio: 350000
    },
    {
        id: "adidas-07",
        titulo: "Adidas 07",
        imagen: "./img/adidas/adidas (7).webp",
        categoria: {
            nombre: "Adidas",
            id: "adidas"
        },
        precio: 350000
    },
    //NIKE
    {
        id: "nike-01",
        titulo: "Nike 01",
        imagen: "./img/nike/nike (1).webp",
        categoria: {
            nombre: "Nike",
            id: "nike"
        },
        precio: 350000
    },
    {
        id: "nike-02",
        titulo: "Nike 02",
        imagen: "./img/nike/nike (2).webp",
        categoria: {
            nombre: "Nike",
            id: "nike"
        },
        precio: 350000
    },
    {
        id: "nike-03",
        titulo: "Nike 03",
        imagen: "./img/nike/nike (3).webp",
        categoria: {
            nombre: "Nike",
            id: "nike"
        },
        precio: 350000
    },
    {
        id: "nike-04",
        titulo: "Nike 04",
        imagen: "./img/nike/nike (4).webp",
        categoria: {
            nombre: "Nike",
            id: "nike"
        },
        precio: 350000
    },
    {
        id: "nike-05",
        titulo: "Nike 05",
        imagen: "./img/nike/nike (5).webp",
        categoria: {
            nombre: "Nike",
            id: "nike"
        },
        precio: 350000
    },
    //REEBOK
    {
        id: "reebok-01",
        titulo: "Reebok 01",
        imagen: "./img/reebok/reebok (1).webp",
        categoria: {
            nombre: "Reebok",
            id: "reebok"
        },
        precio: 350000
    },
    {
        id: "reebok-02",
        titulo: "Reebok 02",
        imagen: "./img/reebok/reebok (2).webp",
        categoria: {
            nombre: "Reebok",
            id: "reebok"
        },
        precio: 350000
    },
    {
        id: "reebok-03",
        titulo: "Reebok 03",
        imagen: "./img/reebok/reebok (3).webp",
        categoria: {
            nombre: "Reebok",
            id: "reebok"
        },
        precio: 350000
    },
    {
        id: "reebok-04",
        titulo: "Reebok 04",
        imagen: "./img/reebok/reebok (4).webp",
        categoria: {
            nombre: "Reebok",
            id: "reebok"
        },
        precio: 350000
    },
    {
        id: "reebok-05",
        titulo: "Reebok 05",
        imagen: "./img/reebok/reebok (5).webp",
        categoria: {
            nombre: "Reebok",
            id: "reebok"
        },
        precio: 350000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal")

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todo") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "todo"
            cargarProductos(productos);
        }

    })
})