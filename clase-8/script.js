// selecciona el boton btnAgregarTarea y hace que con el evento click, ejecute una funcion que guarda en 'value' el contenido que tenga el input donde cargo las tareas
document.getElementById('btnAgregarTarea').addEventListener('click', function() {
	var value = document.getElementById('inputTarea').value;

	// si value tiene contenido, ejecutar la funcion agregarItem que agrega justamente el texto que haya escrito en el input 
	if (value) agregarItem(value);

});


// funcion para crear la ul cada vez que se hace clic en + y hay algo escrito 
function agregarItem(item) {

	// llamamos al elemento ul, es decir, a la lista que va a contener las tareas
	var bloqueLista = document.getElementById('lista');

	// guarda cada li de cada tarea que se genera (no el contenido)
	var inputTarea = document.createElement('li');
	// guarda en la variable el texto que estaba en el input
	inputTarea.innerText = item;

	// crea un elemento div que va a contener la tarea y los botones de borrar y editar.
	var divBotones = document.createElement('div')

	// crea el boton borrar, le asigna una clase y le agregar el texto de adentro
	var btnBorrar = document.createElement('button');
	btnBorrar.classList.add('btnBorrar');
	btnBorrar.innerHTML = 'Borrar';
	// le agrego un evento que cuando le hagan click, llama a la funcion borrarItem
	btnBorrar.addEventListener('click', borrarItem);

	// crea el editar borrar, le asigna una clase y le agregar el texto de adentro
	var btnEditar = document.createElement('button');
	btnEditar.classList.add('btnEditar');
	btnEditar.innerHTML = 'Editar';

	// 
	divBotones.appendChild(btnBorrar);
	divBotones.appendChild(btnEditar);
	inputTarea.appendChild(divBotones);
	bloqueLista.appendChild(inputTarea);
}

function borrarItem () {
	var boton = this;
	var div = boton.parentNode;
	var li = div.parentNode;
	var ul = li.parentNode;

	ul.removeChild(li);
}