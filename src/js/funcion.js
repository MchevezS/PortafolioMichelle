let btnInicio = document.getElementById("btnInicio")     // siempre le tengo que crear una variable y siempre le voy a poner el document.getElemnentbyid // 
let contFormulario = document.getElementById("contFormulario") // aqui llame a contFormulario y le agregue el getelementbyid


function mostrarFormulario(){
contFormulario.classList.remove("hidden") // Accedemos al contenedor que tiene todos los inputs para manipular la clase, usamos el atributo classlist para realizarlo.
contFormulario.classList.add("formulario") // Accedemos al contenedor que tiene todos los inputs para manipular la clase, usamos el atributo classlist para realizarlo.

}
btnInicio.addEventListener("click",()=>{                   // aqui llame al boton inicio y le agregue addeventlistener, esto para cuando toque inicio aparezca el formulario
    mostrarFormulario()
})