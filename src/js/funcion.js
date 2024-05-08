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

let listaUsuario = []                                                     //...cree una variable llamada listaUsuario, esto es para solo los usiarios que se registran
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
    function guardarDatos () {                                                                                  //2.1
        listaUsuario.push(registrarsenombre.value)                                                                 
        localStorage.setItem("Apellidos",inputApellidos.value)
        localStorage.setItem("Edad",inputEdad.value)
        localStorage.setItem("Telefono",inputTelefono.value)
        localStorage.setItem("correoElectronico",inputCorreo.value)
        localStorage.setItem("contrasenia",inputContrasenia.value)
        localStorage.setItem("Nombre",listaUsuario)                                   //... 
        let guardados = localStorage.getItem("Nombre")                             //..
        
        let nombrelista = guardados.split(",")                                   //...
        console.log(nombrelista)                                                //...
    }
    try {
        btnRegistrarse.addEventListener("click",()=>{
            valida_enviar()
            guardarDatos()
        })
    } catch (error) {
    }
              
    // Aqui voy a comenzar a validar los datos.
    function valida_enviar() {
      if (registrarsenombre.value=="") {
            alert("Escribe tu nombre")    
       }

    let Edadpersona = inputEdad.value
    let Edadconvertida = parseInt(Edadpersona)
    console.log(Edadpersona)
      if ( Edadconvertida >= 18) {
        alert("tienes 18 o mas años.")
        
      } else {
          if (Edadconvertida<18) {
            alert("Tienes menos de 18 años.")
             }
        }  
    
    }

    let correoLocalStorage=localStorage.getItem("correoElectronico");
    let claveLocalStorage=localStorage.getItem("contrasenia");                                                // para comparar la informacion de las personas lo que tengo que hacer es dentro de "if"esta para comparar la informacion y hago un else solo por si las personas no ingresan los datos que son, eso para que las personas ya puedan ingresar con su correo y contrasena.
    function comprobarRegistro() {
       console.log(correoLocalStorage)
        console.log(claveLocalStorage)
    }                                                                                                                   
btnEntrar.addEventListener("click",()=>{
    const inputCorreo = document.getElementById("inputCorreo")
    const inputClave = document.getElementById("inputClave")
    if (inputCorreo.value==correoLocalStorage && inputClave.value==claveLocalStorage) {
        alert("Has Iniciado Sesión con Éxito")
        window.location.href = "portafolio.html"                                                                     // lo utilice para que me tire al portafolio
        console.log("ENTRA")
    }else{
        console.log("NO entra")
        alert("Su cuenta no se encuentra Registra")
    }
})








// cambiar para que la informacion de la otra persona no le caiga encima a la otra, osea hacer que se vea la informacion de cualquiera pero sin tener que tapar la otra. 'esto lo hago con arreglos'
