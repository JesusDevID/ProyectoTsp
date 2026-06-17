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
    imagen:"https://dlcdnwebimgs.asus.com/gain/68E55D05-BB23-4998-B3D4-7A389DFE58DA/w717/h525"
},

{
    nombre:"Lenovo Legion",
    categoria:"laptops",
    precio:5800000,
    stock:7,
    imagen:"https://exitocol.vtexassets.com/arquivos/ids/31053987/portatil-gamer-lenovo-legion-5-16iax10-ultra-9-275hx-ram-32gb-ssd-1tb-rtx-5060-8gb.jpg?v=638950176723570000"
},

{
    nombre:"Xiaomi 15",
    categoria:"celulares",
    precio:2900000,
    stock:15,
    imagen:"https://tienda.movistar.com.co/media/catalog/product/m/o/movistar_01_7_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=340&width=360&canvas=360:340"
},

{
    nombre:"Lenovo IdeaPad Slim 3i",
    categoria:"laptops",
    precio:2450000,
    stock:10,
    imagen:"https://static.wixstatic.com/media/a9655c_b0f3f49ba2ec464184aa9977282a0d72~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9655c_b0f3f49ba2ec464184aa9977282a0d72~mv2.png"
},

{
    nombre:"HP Chromebook 14 Laptop",
    categoria:"laptops",
    precio:790000,
    stock:2,
    imagen:"https://exitocol.vteximg.com.br/arquivos/ids/404885/portatil-hp-chromebook-14-intel-celeron-4gb-14-pulgadas-se-7034se.jpg?v=637009921414800000"
},

{
    nombre:"Moto G Play",
    categoria:"celulares",
    precio:290000,
    stock:20,
    imagen:"https://www.notebookcheck.org/uploads/tx_nbc2/Motorola_Moto_G_Play_2023.JPG"
},

{
    nombre:"iPhone 13",
    categoria:"celulares",
    precio:880000,
    stock:10,
    imagen:"https://co.tiendasishop.com/cdn/shop/files/IMG-12496198_223410cb-30e6-4739-b26c-01375038ccde_grande.jpg?v=1723511403"
},

{
    nombre:"Galaxy Chromebook",
    categoria:"laptops",
    precio:680000,
    stock:17,
    imagen:"https://techtoschool.com/cdn/shop/files/Product_Listing_30_fbd3780f-ca15-40d4-a3a9-e99675a8d0a9_1728x.png?v=1732031849"
},

{
    nombre:"T-Mobile Revvl 7",
    categoria:"celulares",
    precio:440000,
    stock:22,
    imagen:"https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/T-Mobile/T-Mobile-Revvl-8-Pro/Graphite-Gray/T-Mobile-Revvl-8-Pro-Graphite-Gray-leftimage.png"
},

{
    nombre:"Redmi Note 14",
    categoria:"celulares",
    precio:800000,
    stock:5,
    imagen:"https://media.falabella.com/falabellaCO/140080385_01/w=1004,h=1500,fit=pad"
},

{
    nombre:"Dell 16",
    categoria:"laptops",
    precio:2100000,
    stock:16,
    imagen:"https://tiendatek.com.co/wp-content/uploads/2025/09/PMU7-RTXA500.webp"
},

{
    nombre:"Motorola Edge",
    categoria:"celulares",
    precio:730000,
    stock:3,
    imagen:"https://olimpica.vtexassets.com/arquivos/ids/1895200/EDGE601.png?v=638883837205370000"
},

{
    nombre:"Dell Latitude 5400",
    categoria:"laptops",
    precio:860000,
    stock:13,
    imagen:"https://ecoportatil.es/9324-medium_default/dell-latitude-5400-14-i5-8365u-16gb-ssd-1000gb-full-hd-a-esp.jpg"
},

{
    nombre:"Samsung Galaxy Z Fold 5",
    categoria:"celulares",
    precio:5120000,
    stock:8,
    imagen:"https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-Z-Fold5/Phantom-Black/Samsung-Galaxy-Z-Fold5-Phantom-Black-frontimage.png"
},

{
    nombre:"Galaxy Book4",
    categoria:"laptops",
    precio:2510000,
    stock:13,
    imagen:"https://m.media-amazon.com/images/I/6131ZgIFn1L.jpg"
},

{
    nombre:"HONOR 200 Dual-SIM",
    categoria:"celulares",
    precio:1540000,
    stock:3,
    imagen:"https://i5.walmartimages.com/asr/36136987-423b-4147-ad59-e6ae5fcfcbcc.5c0d3a6e4c0756f6f1711607f7557afd.jpeg"
},

{
    nombre:"Microsoft Surface",
    categoria:"laptops",
    precio:3500000,
    stock:5,
    imagen:"https://media.falabella.com/falabellaCO/154794903_01/w=1500,h=1500,fit=cover"
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