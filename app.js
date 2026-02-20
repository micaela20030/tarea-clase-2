//TAREITA: 
//crear una página con un botón mágico, cada vez que hagas clic en el botón, pasará algo en la pantalla 

 //INSTRUCCIONES:
//1.- En el archivo script.js:
// //Crear variables.,
//Una variable para el botón.,
//Una variable para el título.,
//Una variable contador que empiece en 0.,

const boton = document.getElementById('boton');
const titulo = document.getElementById('titulo')
let contador = 0;

//2.- Crear una función: La función debe:
//Sumar 1 al contador.,
//Cambiar el texto del título.,
//Cambiar el color del fondo.,

function cambio() {
    contador = contador + 1
    titulo.textContent = contador
    
    document.body.style.backgroundColor = 'red'
}


//3.- Usar un evento
 
//Cuando el botón reciba un click, se debe ejecutar la función.,
//Opcional: pueden agregar más tareas divertidas a la función.

boton.addEventListener("click", cambio)







