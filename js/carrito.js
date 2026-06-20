let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.getElementById("carrito");
const totalHTML = document.getElementById("total");

function mostrarCarrito() {

    contenedor.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {

        contenedor.innerHTML = `
        <div class="card">
            <div class="info">
                <h2>Tu carrito esta vacio</h2>
                <p>
                    Agrega productos desde la tienda para comenzar a comprar.
                </p>
            </div>
        </div>
        `;

        totalHTML.innerHTML = "";

        return;
    }

    carrito.forEach((producto, indice) => {

        total += producto.precio * producto.cantidad;

        contenedor.innerHTML += `

        <div class="card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="info">

                <h3>${producto.nombre}</h3>

                <p class="precio">
                    $${producto.precio.toLocaleString()}
                </p>

                <p>
                    Cantidad: ${producto.cantidad}
                </p>

                <br>

                <button class="btn-cantidad"
                onclick="disminuirCantidad(${indice})">

                    -

                </button>

                <button class="btn-cantidad"
                onclick="aumentarCantidad(${indice})">

                    +

                </button>

                <button class="btn-eliminar"
                onclick="eliminarProducto(${indice})">

                    Eliminar

                </button>

            </div>

        </div>

        `;
    });

    totalHTML.innerHTML =
        "Total: $" + total.toLocaleString();

}

function aumentarCantidad(indice) {

    carrito[indice].cantidad++;

    guardarCarrito();

}

function disminuirCantidad(indice) {

    if (carrito[indice].cantidad > 1) {

        carrito[indice].cantidad--;

    } else {

        eliminarProducto(indice);

        return;

    }

    guardarCarrito();

}

function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    guardarCarrito();

}

function vaciarCarrito() {

    carrito = [];

    guardarCarrito();

}

function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();

}

function comprar() {

    const sesion =
        JSON.parse(localStorage.getItem("sesion"));

    if (!sesion) {

        alert("Debe iniciar sesion para comprar");

        window.location.href = "login.html";

        return;

    }

    alert("Compra realizada con exito");

    carrito = [];

    guardarCarrito();

}

mostrarCarrito();