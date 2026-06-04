const productos = [

{
    nombre:"iPhone 17",
    categoria:"celulares",
    precio:4500000,
    stock:10,
    imagen:"https://m.media-amazon.com/images/I/51GOhI8bhHL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Samsung S26",
    categoria:"celulares",
    precio:3800000,
    stock:8,
    imagen:"https://m.media-amazon.com/images/I/61qvRagAn9L._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"MacBook Pro",
    categoria:"laptops",
    precio:8500000,
    stock:4,
    imagen:"https://m.media-amazon.com/images/I/61PfWcnielL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Asus ROG",
    categoria:"laptops",
    precio:6200000,
    stock:6,
    imagen:"https://m.media-amazon.com/images/I/61N9qYL9TDL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Lenovo Legion",
    categoria:"laptops",
    precio:5800000,
    stock:7,
    imagen:"https://m.media-amazon.com/images/I/71tdtRCCHbL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Xiaomi 15",
    categoria:"celulares",
    precio:2900000,
    stock:15,
    imagen:"https://m.media-amazon.com/images/I/51ib9steRUL.jpg"
},

{
    nombre:"Lenovo IdeaPad Slim 3i",
    categoria:"laptops",
    precio:2450000,
    stock:10,
    imagen:"https://m.media-amazon.com/images/I/51CihH6I+2L._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"HP Chromebook 14 Laptop",
    categoria:"laptops",
    precio:790000,
    stock:4,
    imagen:"https://m.media-amazon.com/images/I/81b6IIclRfS._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Moto G Play",
    categoria:"celulares",
    precio:290000,
    stock:20,
    imagen:"https://m.media-amazon.com/images/I/61xk4XNRktL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"iPhone 13",
    categoria:"celulares",
    precio:880000,
    stock:10,
    imagen:"https://m.media-amazon.com/images/I/61H3jeeHnUL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Galaxy Chromebook",
    categoria:"laptops",
    precio:680000,
    stock:14,
    imagen:"https://m.media-amazon.com/images/I/51Lko54--JL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"T-Mobile Revvl 7",
    categoria:"celulares",
    precio:440000,
    stock:22,
    imagen:"https://m.media-amazon.com/images/I/51Aux7GAksL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"XIAOMI Redmi Note 14",
    categoria:"celulares",
    precio:800000,
    stock:5,
    imagen:"https://m.media-amazon.com/images/I/61RvhprA3qL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Dell 16",
    categoria:"laptops",
    precio:2100000,
    stock:16,
    imagen:"https://m.media-amazon.com/images/I/71WB564uxyL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"LG Velvet",
    categoria:"celulares",
    precio:540000,
    stock:3,
    imagen:"https://m.media-amazon.com/images/I/61l2eRROEwL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Dell Latitude 5400",
    categoria:"laptops",
    precio:860000,
    stock:13,
    imagen:"https://m.media-amazon.com/images/I/61PkGRSw05L._AC_UY327_FMwebp_QL65_.jpg"
}

];

const contenedor = document.getElementById("productos");

function mostrarProductos(lista){

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        contenedor.innerHTML += `
        
        <div class="card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="info">

                <h3>${producto.nombre}</h3>

                <p class="precio">
                    Precio:
                    $${producto.precio.toLocaleString()}
                </p>

                <p class="stock">
                    Cantidad en stock:
                    ${producto.stock}
                </p>

                <button class="btn-carrito">
                    🛒 Agregar al carrito
                </button>

            </div>

        </div>

        `;
    });
}

mostrarProductos(productos);

document.getElementById("busqueda")
.addEventListener("input", function(e){

    const texto = e.target.value.toLowerCase();

    const filtrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
});

document.getElementById("filtro")
.addEventListener("change", function(e){

    const categoria = e.target.value;

    if(categoria === "todos"){
        mostrarProductos(productos);
        return;
    }

    const filtrados = productos.filter(producto =>
        producto.categoria === categoria
    );

    mostrarProductos(filtrados);
});