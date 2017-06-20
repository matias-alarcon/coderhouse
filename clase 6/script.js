// var menu = document.getElementById("menu");

// var itemsMenu = document.getElementsByClassName("menu-item");

// var todosLosLi = document.getElementsByTagName("LI");

// var lista = document.querySelector("li.menu-item");

// var lista = menu.querySelectorAll("li.menu-item");

// function qS (query) {
// 	return document.querySelector(query);
// }

// var lista = "<ul>";
// var item = "<li>Link</li>";
// var numeroDeItems = 15;

// for (var i = 0; i < numeroDeItems; i++) {
// 	lista += item;
// }

// lista += "</ul>"

// document.write(lista);




// var lista = "<ul>";

// var peliculas = [
// 	{
// 		titulo: "Titanic",
// 		id: "1"
// 	},
// 	{
// 		titulo: "La Sirenita",
// 		id: "2"
// 	},
// 	{
// 		titulo: "El Padrino",
// 		id: "3"
// 	}
// ];


// for (var i = 0; i < peliculas.length; i++) {
// 	lista += "<li>Titulo: " + peliculas[i].titulo + "<br>Id: " + peliculas[i].id + "</li>";
// }

// lista += "</ul>"

// document.write(lista);

// var texto = document.createTextNode(". Ademas, esto se va a agregar al primer elemento li.");
// var primerLi = document.querySelector("Li")

// primerLi.appendChild(texto);

// function eliminarElemento(elemento) {
// 	elemento.parentElement.removeChild(elemento);
// 	return elemento;
// }

// var cuantasNoticias = prompt("Cuantas noticias vas a agregar?");









// function agregarNoticia() {

// 	var tituloNoticia = prompt("Como se llama la noticia?");

// 	var articulo = "<article>";
// 	var noticia = "<h1>" + tituloNoticia + "</h1>";
// 	var numeroDeNoticias = 1;

// 	for (var i = 0; i < numeroDeNoticias; i++) {
// 		articulo += noticia;
// 	}

// 	articulo += "</article>"

// 	document.write(articulo);

// 	while (confirm("Desea agregar mas noticias?")) {
// 		var tituloNoticia = prompt("Como se llama la noticia?");
// 	}
// }

// agregarNoticia();





var listaDeNoticias = []

function agregarNoticia(titulo, id) {
	var listaDeNoticias = [];
	listaDeNoticias.push(titulo);
	listaDeNoticias.push(id);
	listaDeNoticias.push(noticia);
}

var agregarMasNoticias = true;

while (agregarMasNoticias == true) {
	var titulo = prompt("Ingrese su noticia");
	var id = prompt("Ingrese ID");

	agregarNoticia(titulo, id);

}

var codigo = "";

for (noticia in listaDeNoticias) {
	codigo += "<h2>" + listaDeNoticias[noticia][0] + "</h2>"
	codigo += "<p>"
}




document.write(codigo);