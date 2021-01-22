const menuComida = [
    {nombre: "Fideos", imagen:"./img/fideos.webp", precio:"350$"},
    {nombre: "Endalada", imagen:"./img/ensalada.jpg", precio:"200$"},
    {nombre:"Hamburguesa con papas fritas", imagen:"./img/hamburguesa-con-papas.jpg", precio:"400$"},
    {nombre:"Papas Fritas con Ketchup", imagen:"./img/papas-fritas.png", precio:"150$"},
    {nombre:"Pastel de Papa", imagen:"./img/pastel-de-papa.jpg", precio:"250$"},
    {nombre:"Pollo al Horno", imagen:"./img/pollo-al-horno.jpg", precio:"400$"},
    {nombre:"Helado", imagen:"./img/helado.jpg", precio:"100$"},
    {nombre:"Flan con Dulce de Leche", imagen:"./img/flan-dulce-de-leche.webp", precio:"100$"},
    {nombre:"Panqueque con Dulce de Leche", imagen:"./img/panqueque.jpg", precio:"100$"},
    {nombre:"Torta de Chocolate", imagen:"./img/torta-chocolate.jpg", precio:"100$"},
    {nombre:"Torta de Frutos Rojos", imagen:"./img/torta-frutos-rojos.jpg", precio:"100$"},
    {nombre:"Torta con Nueces", imagen:"./img/torta-nueces.jpg", precio:"100$"},
];

/*
 y si queremos meter postres en un futuro o modificarla?


    {nombre:"Helado", imagen:"./img/helado.jpg", precio:"100$"},
    {nombre:"Flan con Dulce de Leche", imagen:"./img/flan-dulce-de-leche.webp", precio:"100$"},
    {nombre:"Panqueque con Dulce de Leche", imagen:"./img/panqueque.jpg", precio:"100$"},
    {nombre:"Torta de Chocolate", imagen:"./img/torta-chocolate.jpg", precio:"100$"},
    {nombre:"Torta de Frutos Rojos", imagen:"./img/torta-frutos-rojos.jpg", precio:"100$"},
    {nombre:"Torta con Nueces", imagen:"./img/torta-nueces.jpg", precio:"100$"}, 
*/ 


menuComida.forEach(comida =>{
    const $menu = document.querySelector(".menu");
    const $comida = document.createElement("li");
    $comida.className = "list-group-item list-group-item-action";
    $comida.textContent = comida.nombre;

    $menu.appendChild($comida);

    $comida.addEventListener("click", ()=>{
        const $tituloCarta = document.querySelector(".card-title");
        const $parrafoPrecio = document.querySelector(".parrafo-precio");
        const $imagenComida = document.querySelector("#comida-imagen");
        const $parrafoPedido = document.querySelector(".parrafo-pedido");

        $tituloCarta.textContent = comida.nombre;
        $parrafoPrecio.textContent = `Precio: ${comida.precio}.`;
        $imagenComida.setAttribute("src", comida.imagen);
        $parrafoPedido.textContent = "Haga su pedido por el Insta, Face o por WhatsApp al fondo de la pagina";
    });
});
