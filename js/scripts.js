/**  querySelector  **/

const heading = document.querySelector(".header__texto h2")
heading.textContent = "Nuevo Heading"
// heading.classList.add("nueva-clase")
console.log(heading)


/** querySelectorAll **/

const enlaces = document.querySelectorAll(".navegacion a")
console.log(enlaces[0])

enlaces[0].textContent = "Nuevo Texto para Enlace"
// enlaces[0].href = "http://google.com"
enlaces[0].classList.add("nueva-clase")
// enlaces[0].classList.remove("navegacion__enlace")


/** getElementById **/

const heading2 = document.getElementById("heading")
console.log(heading2)


/** Generar un nuevo enlace **/

const nuevoEnlace = document.createElement("A")

// Agregar HREF

nuevoEnlace.href = "nuevo-enlace.html"

// Agregar TEXTO

nuevoEnlace.textContent = "Tienda Virtual"

// Agregar CLASE

nuevoEnlace.classList.add("navegacion__enlace")

// Agregarla al Documento

const navegacion = document.querySelector(".navegacion")
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace)


/** Eventos **/

// console.log(1)

// window.addEventListener("load", function () {  // load espera a que el JS y los archivos que dependen del HTML esten listos
//     console.log(2)
// })

// window.onload = function () {
//     console.log(3)
// }

// document.addEventListener("DOMContentLoaded", function () {  // Solo espera que se descargue el archivo HTML, pero no espera CSS o imagenes
//     console.log(4)
// })



// console.log(5)

// window.onscroll = function (evento) {
//     console.log(evento)
// }



/** Seleccionar elementos y asociarles un evento **/

/*
const btnEnviar = document.querySelector(".boton--primario")
btnEnviar.addEventListener("click", function (evento) {
    console.log(evento)
    evento.preventDefault()

    // Validar un formulario


    console.log("enviando formulario")
})
*/



/** Evento de los Input y de las Textareas **/

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")
const formulario = document.querySelector(".formulario")

// nombre.addEventListener("input", function (evento) {
//     console.log(evento.target.value)
// })

// email.addEventListener("input", function (evento) {
//     console.log(evento.target.value)
// })

// mensaje.addEventListener("input", function (evento) {
//     console.log(evento.target.value)
// })


nombre.addEventListener("input", leerTexto)
email.addEventListener("input", leerTexto)
mensaje.addEventListener("input", leerTexto)

function leerTexto(evento) {
    // console.log(evento.target.value)

    datos[evento.target.id] = evento.target.value

    // console.log(evento.target)

    // console.log(datos)
}

/** El evento de Submit **/


formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Validar el formulario

    const { nombre, email, mensaje } = datos

    if (document.querySelector(".error") === null && document.querySelector(".correcto") === null) {

        if (nombre.length === 0 || email.length === 0 || mensaje.length === 0) {

            mostrarError("Todos los campos son obligatorios")
        }
        else {

            mostrarMensaje("Mensaje enviado correctamente")

        }
    }


    /*
    if (nombre === "" || email === "" || mensaje === "") {
        // console.log("Todos los caqmpos son obligatorios")

        mostrarError("Todos los campos son obligatorios")

        return // Corta la ejecución del codigo
    }

    // Crear la otra alerta de enviar correctamente

    mostrarMensaje("Mensaje enviado correctamente")
    */


})

// Muestra una alerta de que se envio correctamente

function mostrarMensaje(mensaje) {
    const alerta = document.createElement("P")
    alerta.textContent = mensaje
    alerta.classList.add("correcto")

    formulario.appendChild(alerta)

    // desaparezca despues de cinco segundos

    setTimeout(() => {
        alerta.remove()
    }, 5000)
}


// Muestra un error en pantalla

function mostrarError(mensaje) {
    const error = document.createElement("P")
    error.textContent = mensaje
    error.classList.add("error")

    formulario.appendChild(error)

    // desaparezca despues de cinco segundos

    setTimeout(() => {
        error.remove()
    }, 5000)
}


function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement("P")
    alerta.textContent = mensaje

    if (error) {
        alerta.classList.add("error")
    }
    else {
        alerta.classList.add("correcto")
    }

    formulario.appendChild(alerta)

    // desaparezca despues de cinco segundos

    setTimeout(() => {
        error.remove()
    }, 5000)

}