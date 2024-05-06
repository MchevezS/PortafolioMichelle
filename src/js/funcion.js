let btnInicio = document.getElementById("btnInicio")                          //1. siempre le tengo que crear una variable y siempre le voy a poner el document.getElemnentbyid // 
let contFormulario = document.getElementById("contFormulario")               // aqui llame a contFormulario y le agregue el getelementbyid
let inputNombre = document.getElementById("inputNombre")                               // 2. tuve que crear esta variable
let btnEntrar = document.getElementById("btnEntrar")                                  // 2. cree esta variable para poder hacer una validacion. 
let btnLimpiar = document.getElementById("btnLimpiar")
let registrarsenombre = document.getElementById("registrarsenombre")                 // 2.1
let btnListo = document.getElementById("btnListo")                                   //2.1



function mostrarFormulario(){
contFormulario.classList.remove("hidden")                              //1. Accedemos al contenedor que tiene todos los inputs para manipular la clase, usamos el atributo classlist para realizarlo.
contFormulario.classList.add("formulario")                            //1. Accedemos al contenedor que tiene todos los inputs para manipular la clase, usamos el atributo classlist para realizarlo.

}
btnInicio.addEventListener("click",()=>{                            //1. aqui llame al boton inicio y le agregue addeventlistener, esto para cuando toque inicio aparezca el formulario
    mostrarFormulario()
})

let inputNombreLocalStorage                                                     // 2. luego afuera de esta funcion cree esta variable pero le tuve que añadir el "localstorage" para que las cosas se guardaran aqui
function guardarDatos(){                                                       // 2. luego cree esta funcion para que la clave fuera nombreUsuario
    inputNombreLocalStorage = localStorage.setItem("nombreUsuario",inputNombre.value)

}

btnEntrar.addEventListener("click",()=>{                                    // 2. despues llame el ID, cuando haga click en el en entrar los datos se guarden                                             
    guardarDatos()
})


btnLimpiar.addEventListener("click",()=>{
    localStorage.clear()
})


let registrarsenombreLocalStorage                                                              //2.1
function guardarDatos() {                                                  
    registrarsenombreLocalStorage = localStorage.setItem("nombre",registrarsenombre.value)    //2.1
}
btnListo.addEventListener("click",()=>{                                                       //2.1                                   
    guardarDatos()
})
