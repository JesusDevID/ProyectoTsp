const productos = [

{
    nombre:"iPhone 17",
    categoria:"celulares",
    precio:4500000,
    stock:10,
    imagen:"https://co.tiendasishop.com/cdn/shop/files/IMG-18067810_m_jpeg_1_11d1e1b0-5fca-4429-b658-0ad7b281be8f.jpg?v=1757469626&width=823"
},

{
    nombre:"Samsung S26",
    categoria:"celulares",
    precio:3800000,
    stock:8,
    imagen:"https://www.korolos.com.co/wp-content/uploads/2026/04/S26ULTRAKOROLOS2-1.jpg"
},

{
    nombre:"MacBook Pro",
    categoria:"laptops",
    precio:8500000,
    stock:4,
    imagen:"https://mac-center.com/cdn/shop/files/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__ESES_ab897875-8b80-4a24-a091-2b9f642f2bce.jpg?v=1700304124"
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
    stock:2,
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
    stock:17,
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
    nombre:"Motorola Edge",
    categoria:"celulares",
    precio:730000,
    stock:3,
    imagen:"https://m.media-amazon.com/images/I/81Vo6cSAWbL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Dell Latitude 5400",
    categoria:"laptops",
    precio:860000,
    stock:13,
    imagen:"https://m.media-amazon.com/images/I/61PkGRSw05L._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Samsung Galaxy Z Fold 5",
    categoria:"celulares",
    precio:5120000,
    stock:8,
    imagen:"https://m.media-amazon.com/images/I/518OMBP4J7L._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Galaxy Book4",
    categoria:"laptops",
    precio:2510000,
    stock:13,
    imagen:"https://m.media-amazon.com/images/I/71Q-k94XjBL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"HONOR 200 Dual-SIM",
    categoria:"celulares",
    precio:1540000,
    stock:3,
    imagen:"https://m.media-amazon.com/images/I/61AQkbAo6lL._AC_UY327_FMwebp_QL65_.jpg"
},

{
    nombre:"Microsoft Surface",
    categoria:"laptops",
    precio:3500000,
    stock:5,
    imagen:"https://m.media-amazon.com/images/I/61cVvg6zcWL._AC_UY327_FMwebp_QL65_.jpg"
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