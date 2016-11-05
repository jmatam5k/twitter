

function agregaPost(){
	var comentario = document.getElementById('mensaje');
	var contenedorPosteos = document.getElementById('container-text');
	var posteo = document.createElement('div');
	var elementoComentario = document.createElement('p');
	var nodoPost = document.createTextNode(comentario.value);

	

		//se crea input
		var crearInput = document.createElement('input');  // Crear un <button>
		crearInput.setAttribute('type','checkbox'); // Se crea atributo de checkbox
		
		//se crea elemento 'me gusta'

		var crearHeart = document.createElement('span');
		crearHeart.setAttribute('type','button');
		
		//se crea icono Corazón
		var iconHeart= document.createElement('i');
		iconHeart.setAttribute('class','fa fa-heart');

		crearHeart.appendChild(iconHeart);// se concatena boton e icono

		//se crea elemento eliminar
		var eliminar = document.createElement('span');
		eliminar.setAttribute('type','button');

		//se crea icono basurero
		var iconBasurero=document.createElement('i');
		iconBasurero.setAttribute('class','fa fa-trash-o');
		eliminar.appendChild(iconBasurero);

		//se concatena
		elementoComentario.appendChild(nodoPost);
		posteo.appendChild(elementoComentario);
		posteo.setAttribute('class', 'posteo');
		contenedorPosteos.appendChild(posteo);
		posteo.appendChild(crearInput);
		posteo.appendChild(nodoPost);
		posteo.appendChild(crearHeart);
		posteo.appendChild(eliminar);
		contenedorPosteos.appendChild(posteo);

		//cambiar color 'me gusta'
		crearHeart.addEventListener('click',function(){
			crearHeart.classList.toggle('color');
		});

		//Tachar texto
		crearInput.addEventListener('click',function(){
			posteo.classList.toggle('tachado');
		});

		//eliminar posteo
		eliminar.addEventListener('click', function(){
 		contenedorPosteos.removeChild(posteo);
 	});

	}
