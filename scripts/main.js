let myImage = document.querySelector('img');
myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	console.log(mySrc)
	if (mySrc === '../images/coding.jpg') {
		myImage.setAttribute('src', '../images/mycode.png')
	}else {
		myImage.setAttribute('src', '../images/coding.jpg')
	}
}

let myButton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceUsuario() {
	let nombre = prompt('Por favor, introduce tu nombre')
	if (!nombre) {
		estableceUsuario()
	} else {
		localStorage.setItem('nombre', nombre)
		miTitulo.textContent = ('Despertando el hambre de saber porque estas aqui, ' + nombre)
	}
}

if (!localStorage.getItem('nombre')) {
	estableceUsuario()
} else {
	let nombreAlmacenado = localStorage.getItem('nombre');
	miTitulo.textContent = ('Despertando el hambre de saber porque estas aqui, ' + nombreAlmacenado)
}

myButton.onclick = function () {
	estableceUsuario()
} 