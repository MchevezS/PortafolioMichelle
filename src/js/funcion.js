let btnMostrarFormulario = document.getElementById("btnMostrarFormulario")                          //1. siempre le tengo que crear una variable y siempre le voy a poner el document.getElemnentbyid // 
let contFormulario = document.getElementById("contFormulario")               // aqui llame a contFormulario y le agregue el getelementbyid  

let inputNombre = document.getElementById("inputNombre")                               // 2. tuve que crear esta variable
let btnEntrar = document.getElementById("btnEntrar")                                  // 2. cree esta variable para poder hacer una validacion. 

let btnLimpiar = document.getElementById("btnLimpiar")

let registrarsenombre = document.getElementById("registrarsenombre")                 // 2.1                               
let inputApellidos = document.getElementById("inputApellidos")
let inputEdad = document.getElementById("inputEdad")
let inputTelefono = document.getElementById("inputTelefono")
let inputCorreo = document.getElementById("inputCorreo")
let inputContrasenia = document.getElementById("inputContrasenia")
let btnRegistrarse = document.getElementById("btnRegistrarse") 

function mostrarFormulario(){
contFormulario.classList.remove("hidden")                              //1. Accedemos al contenedor que tiene todos los inputs para manipular la clase, usamos el atributo classlist para realizarlo.
contFormulario.classList.add("formulario")                            //1. Accedemos al contenedor que tiene todos los inputs para manipular la clase, usamos el atributo classlist para realizarlo.

}
    try{
        btnMostrarFormulario.addEventListener("click",()=>{                                 //1. aqui llame al boton inicio y le agregue addeventlistener, esto para cuando toque inicio aparezca el formulario
        mostrarFormulario();
    })
     }catch(e){
         console.log(e)
     }


    let inputNombreLocalStorage                                                     // 2. luego afuera de esta funcion cree esta variable pero le tuve que añadir el "localstorage" para que las cosas se guardaran aqui
    let registrarsenombreLocalStorage                                                              //2.1
    let inputApellidosLocalStorage
    let inputEdadLocalStorage
    let inputTelefonoLocalStorage
    let inputCorreoLocalStorage
    let inputContraseniaLocalStorage
    function guardarDatos () {                                                                     //2.1
        localStorage.setItem("Apellidos",inputApellidos.value)
        localStorage.setItem("Edad",inputEdad.value)
        localStorage.setItem("Telefono",inputTelefono.value)
        localStorage.setItem("correo Electronico",inputCorreo.value)
        localStorage.setItem("cree su contraseña",inputcrosenia.value)
        localStorage.setItem("Nombre",registrarsenombre) 
    }
    btnRegistrarse.addEventListener("click",()=>{
        guardarDatos()
    })

    // Aqui voy a comenzar a validar los datos.
    function valida_enviar() {
        if (document.contFormulario.inputNombre.value.length==0) {
            alert("Escribe tu nombre")
            document.contFormulario.inputNombre.focus()
            return 0;
        }
        
    }