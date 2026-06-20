const productos = [

{
    nombre:"iPhone 17",
    categoria:"celulares",
    precio:4500000,
    stock:10,
    imagen:"https://co.tiendasishop.com/cdn/shop/files/IMG-18067810_m_jpeg_1_11d1e1b0-5fca-4429-b658-0ad7b281be8f.jpg?v=1757469626&width=823",
    descripcion:"El iPhone 17 ofrece un potente rendimiento gracias a su procesador de última generación, sistema avanzado de cámaras y una pantalla Super Retina XDR que brinda colores vibrantes y gran nivel de detalle."
},

{
    nombre:"Samsung S26",
    categoria:"celulares",
    precio:3800000,
    stock:8,
    imagen:"https://www.korolos.com.co/wp-content/uploads/2026/04/S26ULTRAKOROLOS2-1.jpg",
    descripcion:"Smartphone Samsung con pantalla AMOLED de alta resolución, cámara avanzada y batería de larga duración."
},

{
    nombre:"MacBook Pro",
    categoria:"laptops",
    precio:8500000,
    stock:4,
    imagen:"https://mac-center.com/cdn/shop/files/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__ESES_ab897875-8b80-4a24-a091-2b9f642f2bce.jpg?v=1700304124",
    descripcion:"Portátil Apple con procesador M3, pantalla Retina y sistema operativo macOS."
},

{
    nombre:"Asus ROG",
    categoria:"laptops",
    precio:6200000,
    stock:6,
    imagen:"https://dlcdnwebimgs.asus.com/gain/68E55D05-BB23-4998-B3D4-7A389DFE58DA/w717/h525",
    descripcion:"Portátil gaming ASUS con procesador AMD Ryzen y gráficos NVIDIA."
},

{
    nombre:"Lenovo Legion",
    categoria:"laptops",
    precio:5800000,
    stock:7,
    imagen:"https://static.wixstatic.com/media/a9655c_b0f3f49ba2ec464184aa9977282a0d72~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9655c_b0f3f49ba2ec464184aa9977282a0d72~mv2.png",
    descripcion:"Portátil gaming Lenovo con procesador Intel Core i7 y gráficos NVIDIA GeForce."
},

{
    nombre:"Xiaomi 15",
    categoria:"celulares",
    precio:2900000,
    stock:15,
    imagen:"https://tienda.movistar.com.co/media/catalog/product/m/o/movistar_01_7_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=340&width=360&canvas=360:340",
    descripcion:"Smartphone Xiaomi con pantalla AMOLED de alta resolución, cámara avanzada y batería de larga duración."
},

{
    nombre:"Lenovo IdeaPad Slim 3i",
    categoria:"laptops",
    precio:2450000,
    stock:10,
    imagen:"https://m.media-amazon.com/images/I/71OJ8m9zQXL.jpg",
    descripcion:"Portátil Lenovo con procesador Intel Core i5 y sistema operativo Windows."
},

{
    nombre:"HP Chromebook 14 Laptop",
    categoria:"laptops",
    precio:790000,
    stock:2,
    imagen:"https://exitocol.vteximg.com.br/arquivos/ids/404885/portatil-hp-chromebook-14-intel-celeron-4gb-14-pulgadas-se-7034se.jpg?v=637009921414800000",
    descripcion:"Portátil HP con procesador Intel Celeron y sistema operativo Chrome OS."
},

{
    nombre:"Moto G Play",
    categoria:"celulares",
    precio:290000,
    stock:20,
    imagen:"https://www.notebookcheck.org/uploads/tx_nbc2/Motorola_Moto_G_Play_2023.JPG",
    descripcion:"Smartphone Motorola con pantalla AMOLED de alta resolución, cámara avanzada y batería de larga duración."
},

{
    nombre:"iPhone 13",
    categoria:"celulares",
    precio:880000,
    stock:10,
    imagen:"https://co.tiendasishop.com/cdn/shop/files/IMG-12496198_223410cb-30e6-4739-b26c-01375038ccde_grande.jpg?v=1723511403",
    descripcion:"El iPhone 13 ofrece un potente rendimiento gracias a su procesador A15 Bionic, sistema de cámaras mejorado y una pantalla Super Retina XDR que brinda colores vibrantes y gran nivel de detalle."
},

{
    nombre:"Galaxy Chromebook",
    categoria:"laptops",
    precio:680000,
    stock:17,
    imagen:"https://techtoschool.com/cdn/shop/files/Product_Listing_30_fbd3780f-ca15-40d4-a3a9-e99675a8d0a9_1728x.png?v=1732031849",
    descripcion:"Portátil Samsung con procesador Intel Celeron y sistema operativo Chrome OS."
},

{
    nombre:"T-Mobile Revvl 7",
    categoria:"celulares",
    precio:440000,
    stock:22,
    imagen:"https://www.androidauthority.com/wp-content/uploads/2017/11/T-Mobile-Revvl-Plus.jpg",
    descripcion:"Smartphone T-Mobile con pantalla AMOLED de alta resolución, cámara avanzada y batería de larga duración."
},

{
    nombre:"Redmi Note 14",
    categoria:"celulares",
    precio:800000,
    stock:5,
    imagen:"https://www.smartgadgets.com.co/cdn/shop/files/Copia_de_Formato_Celular_Watch_4.svg?v=1742502647&width=416",
    descripcion:"Smartphone Redmi con pantalla AMOLED de alta resolución, cámara avanzada y batería de larga duración."
},

{
    nombre:"Dell 16",
    categoria:"laptops",
    precio:2100000,
    stock:16,
    imagen:"https://tiendatek.com.co/wp-content/uploads/2025/09/PMU7-RTXA500.webp",
    descripcion:"Portátil Dell con procesador Intel Core i7 y sistema operativo Windows."
},

{
    nombre:"Motorola Edge",
    categoria:"celulares",
    precio:730000,
    stock:3,
    imagen:"https://olimpica.vtexassets.com/arquivos/ids/1895200/EDGE601.png?v=638883837205370000",
    descripcion:"Smartphone Motorola con pantalla AMOLED de alta resolución, cámara avanzada y batería de larga duración."
},

{
    nombre:"Dell Latitude 5400",
    categoria:"laptops",
    precio:860000,
    stock:13,
    imagen:"https://ecoportatil.es/9324-medium_default/dell-latitude-5400-14-i5-8365u-16gb-ssd-1000gb-full-hd-a-esp.jpg",
    descripcion:"Portátil Dell con procesador Intel Core i5 y sistema operativo Windows."
},

{
    nombre:"Samsung Galaxy Z Fold 5",
    categoria:"celulares",
    precio:5120000,
    stock:8,
    imagen:"https://media.falabella.com/falabellaCL/144849532_01/w=1500,h=1500,fit=cover",
    descripcion:"Smartphone Samsung con pantalla plegable y procesador Snapdragon 8 Gen 2."
},

{
    nombre:"Galaxy Book4",
    categoria:"laptops",
    precio:2510000,
    stock:13,
    imagen:"https://m.media-amazon.com/images/I/6131ZgIFn1L.jpg",
    descripcion:"Portátil Samsung con procesador Intel Celeron y sistema operativo Chrome OS."
},

{
    nombre:"HONOR 200 Dual-SIM",
    categoria:"celulares",
    precio:1540000,
    stock:3,
    imagen:"https://i5.walmartimages.com/asr/36136987-423b-4147-ad59-e6ae5fcfcbcc.5c0d3a6e4c0756f6f1711607f7557afd.jpeg",
    descripcion:"Smartphone HONOR con pantalla AMOLED de alta resolución, cámara avanzada y batería de larga duración."
},

{
    nombre:"Microsoft Surface",
    categoria:"laptops",
    precio:3500000,
    stock:5,
    imagen:"https://media.falabella.com/falabellaCO/154794903_01/w=1500,h=1500,fit=cover",
    descripcion:"Portátil Microsoft con procesador Intel Core i7 y sistema operativo Windows."
}

];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.getElementById("productos");

function mostrarProductos(lista) {

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

                <details class="detalles-producto">
                    <summary>Más detalles</summary>
                    <p>${producto.descripcion}</p>
                </details>

                <button class="btn-carrito"
                onclick="agregarCarrito(${productos.indexOf(producto)})">
                    🛒 Agregar al carrito
                </button>

            </div>

        </div>

        `;
    });

}

function agregarCarrito(indice) {

    const producto = productos[indice];

    const existente = carrito.find(
        p => p.nombre === producto.nombre
    );

    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({
            ...producto,
            cantidad: 1
        });

    }

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado al carrito");

}

mostrarProductos(productos);

document.getElementById("busqueda")
    .addEventListener("input", function (e) {

        const texto = e.target.value.toLowerCase();

        const filtrados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(texto)
        );

        mostrarProductos(filtrados);

    });

document.getElementById("filtro")
    .addEventListener("change", function (e) {

        const categoria = e.target.value;

        if (categoria === "todos") {

            mostrarProductos(productos);
            return;

        }

        const filtrados = productos.filter(producto =>
            producto.categoria === categoria
        );

        mostrarProductos(filtrados);

    });
document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",function(){

        this.classList.add("click");

        setTimeout(()=>{

            this.classList.remove("click");

        },200);

    });

});
