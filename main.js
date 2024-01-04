import './style.css';

const navItems = ["Productos", "Oferta", "Contáctanos", "Login"]
const divApp = document.querySelector("#app");
const newNav = document.createElement ('nav');
const ul = document.createElement('ul');

//! MENU HAMBURGUESA
document.querySelector(".bars__menu").addEventListener("click", animateBars);
var linea1__bars = document.querySelector(".line1__bars-menu");
var linea2__bars = document.querySelector(".line2__bars-menu");
var linea3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector("nav")

const burger = document.querySelector('.bars__menu')
burger.addEventListener('click', () => {
  if (ulHamburguesa.style.display === "flex"){
    ulHamburguesa.style.display = 'none'
  }else{
    ulHamburguesa.style.display = "flex"
  }

})

function animateBars(){
  linea1__bars.classList.toggle("activeline1__bars-menu");
  linea2__bars.classList.toggle("activeline2__bars-menu");
  linea3__bars.classList.toggle("activeline3__bars-menu");
  container__menu.classList.toggle("menu__active");
  ulHamburguesa.classList.toggle("menuActivo");
}

const ulHamburguesa = document.createElement('ul');
for (const item of navItems) {

  const liHamburguesa = document.createElement("li");
  const a = document.createElement("a");
    a.href = "#"
    a.textContent = item;
    liHamburguesa.appendChild(a)
    ulHamburguesa.appendChild(liHamburguesa)
    liHamburguesa.classList.add("lihamburguesa");
    a.classList.add("aHamburguesa")
    
}
 
newNav.appendChild(ulHamburguesa);
divApp.appendChild(newNav);
ulHamburguesa.classList.add("ulHamburguesa")



//! IMAGENES
const imglogo = document.createElement('img')
const imgMain = document.createElement('img')
imgMain.src = './public/main.jpeg'
imgMain.classList.add('img-main');

//!   DIV CARTA
const divCarta = document.createElement('div');
divCarta.classList.add ('carta');

const sectionCarta = document.createElement('section')
sectionCarta.classList.add('sectionCarta')

const tituloCarta = document.createElement('h3');
tituloCarta.textContent = 'Call Of Duty ya a la venta'  
tituloCarta.classList.add('tituloCarta')

const pCarta = document.createElement('p')
pCarta.textContent = 'En un futuro no muy lejano, el mundo se encuentra inmerso en un conflicto global sin precedentes. Gobiernos caídos, alianzas fracturadas y territorios devastados delinean el paisaje de un mundo que ha perdido la esperanza en la paz. En este caos, emerge un juego de guerra revolucionario'
pCarta.classList.add('pCarta')

 //! boton carta
const button = document.createElement('button')
button.textContent = 'Comprar'
button.classList.add('buttonCarta')


for (const item of navItems) {

  const li = document.createElement("li");
  const a = document.createElement("a");
    a.href = "#"
    a.textContent = item;
    imglogo.src = './public/png-clipart-round-orange-ant-logo-platformio-logo-icons-logos-emojis-tech-companies-thumbnail.png';
    imglogo.alt = 'Imagen principal';
    imglogo.width = 80;
    imglogo.height = 80;
    imglogo.classList.add('imglogo')
    li.appendChild(a)
    ul.appendChild(li)
    ul.classList.add("ulMain")
    li.classList.add("liMain")
}
 
newNav.appendChild(ul);
divApp.appendChild(newNav);
newNav.appendChild(imglogo)
divApp.appendChild(imgMain)
imgMain.appendChild (sectionCarta);
divApp.appendChild (sectionCarta)
sectionCarta.appendChild(tituloCarta);
sectionCarta.appendChild(pCarta)
sectionCarta.appendChild(button)


//! div productos  Y buscadores
const arrayDeProductos = [
  {
    nombre: "Portatil Acer",
    precio: "9999 €",
    categoria: "Portatil",
    imagen: "./public/51IXmsxgFgL._SL500_.jpg"
  },
  {
    nombre: "Sony Proyect Q",
    precio: "299 €",
    categoria: "Consola portable",
    imagen: "./public/61wQoJIPHAL._AC_UF894,1000_QL80_.jpg"
  },
  {
    nombre: "Silla gamer",
    precio: "499 €",
    categoria: "Silla gamer",
    imagen: "./public/drift-rubius-premium-setup.jpg",
  },
  {
    nombre: "Mesa Lanmobel",
    precio: "600 €",
    categoria: "Mesa Gamer",
    imagen: "./public/Mesa-gaming-Lanmobel-Muebles-Toscana.jpg",
  },
  {
    nombre: "Mesa led",
    precio: "200 €",
    categoria: "Mesa gamer",
    imagen: "./public/mesa-gaming-rgb-led-esquinera-140cm-1-77444.jpeg"
  },
  {
    nombre: "Pc Gamer",
    precio: "800 €",
    categoria: "Pc Mesa",
    imagen: "./public/pc-gamer-firex8-rgb-plus-core-i9-13900k-13th.jpg"
  },
  {
    nombre: "Pc Gamer completo",
    precio: "900 €",
    categoria: "Pc gamer",
    imagen: "./public/pc-gaming-completo-intel-core-i3-10100fgtx1650.jpg"
  },
  {
    nombre: "Ps5 Spiderman",
    precio: "2499 €" ,
    categoria: "PS 5",
    imagen: "./public/Sony-PlayStation-5-PS5-Blu-ray-Edition-Marvel-Spider-Man-2-Console-Bundle-US-Plug-1000039239.jpg"
  },
  {
    nombre: "Tarjeta Grafica",
    precio: "1299 €",
    categoria: "Tarjeta grafica",
    imagen: "./public/tarjeta grafica.jpg"
  },
  {
    nombre: "X Box X",
    precio: "5999 €",
    categoria: "X box",
    imagen: "./public/xbox.jpg"
  }
];

const buscador = document.createElement('input');
buscador.type = 'text';
buscador.placeholder = 'Qué quieres buscar';
buscador.classList.add('input');

const precioInput = document.createElement('input');
precioInput.type = 'number';
precioInput.placeholder = 'Precio máximo';
precioInput.classList.add('input');

const container = document.querySelector("#app");
container.appendChild(buscador);
container.appendChild(precioInput);

const buttonReset = document.createElement("button");
buttonReset.textContent = "Reset"
buttonReset.classList.add("botonreset")
divApp.appendChild(buttonReset)

 
/*function buscarProductos(){
  const productosEncontrados = true;
  if(productosEncontrados){
    container.appendChild(h2NoProducto)
    
  }else{
    main.innerHTML = '';
    if(h2NoProducto.parentNode){
      h2NoProducto.parentNode.removeChild(h2NoProducto); 
    }   
  }
}
/* buscarProductos() */

const h2NoProducto = document.createElement('h2');
h2NoProducto.textContent = 'No se encontraron productos';

function buscarProductos() {
  const searchTerm = buscador.value.toLowerCase();
  const precioMaximo = parseFloat(precioInput.value) || Infinity;

  const productosFiltrados = arrayDeProductos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm) &&
    parseFloat(producto.precio.replace(' €', '')) <= precioMaximo
  );

    productosFiltrados.length > 0
    ? printObjet(productosFiltrados)
    : mostrarMensajeNoResultados();
}


buttonReset.addEventListener("click", function() {
  buscador.value = '';
  precioInput.value = '';
  buscarProductos();
});

const divObjetos = document.querySelector("#app");
const main = document.createElement("main");
main.classList.add("main");
divObjetos.appendChild(main);

const printObjet = (products) => {
  
  main.innerHTML = "";

  for (const product of products) {
    const divProduct = document.createElement("div");
    divProduct.classList.add("divproduct");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    img.classList.add("imgproduct");
    const nombre = document.createElement("h3");
    const precio = document.createElement("p");

    img.src = product.imagen;
    nombre.textContent = product.nombre;
    precio.textContent = product.precio;

    divProduct.appendChild(divImg);
    divImg.appendChild(img);
    divProduct.appendChild(nombre);
    divProduct.appendChild(precio);
    main.appendChild(divProduct);
  }
}

buscador.addEventListener('input', function () {
  const searchTerm = buscador.value.toLowerCase();
  const precioMaximo = parseFloat(precioInput.value) || Infinity;

  const productosFiltrados = arrayDeProductos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm) &&
    parseFloat(producto.precio.replace(' €', '')) <= precioMaximo
  );

  printObjet(productosFiltrados);
});

precioInput.addEventListener('input', function () {
  const searchTerm = buscador.value.toLowerCase();
  const precioMaximo = parseFloat(precioInput.value) || Infinity;

  const productosFiltrados = arrayDeProductos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm) &&
    parseFloat(producto.precio.replace('200 €', '2000 €')) <= precioMaximo
  );

  printObjet(productosFiltrados);
});

printObjet(arrayDeProductos);

const footer = document.createElement ('footer');   
const footerP = document.createElement ('p')
footerP.textContent = 'Todos los derechos reservados 2023'
divApp.appendChild(footer)
footer.appendChild(footerP)

