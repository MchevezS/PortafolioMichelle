let btnMostrarFormulario = document.getElementById("btnMostrarFormulario")                          //1. siempre le tengo que crear una variable y siempre le voy a poner el document.getElemnentbyid // 
let contFormulario = document.getElementById("contFormulario")               // aqui llame a contFormulario y le agregue el getelementbyid  
let inputNombre = document.getElementById("inputNombre")                               // 2. tuve que crear esta variable
let btnEntrar = document.getElementById("btnEntrar")                                  // 2. cree esta variable para poder hacer una validacion. 
let btnLimpiar = document.getElementById("btnLimpiar")
let registrarsenombre = document.getElementById("registrarsenombre")                                        
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
  let listaUsuario = JSON.parse(localStorage.getItem("usuarios")) || []                                                    //...cree una variable llamada listaUsuario, y listaUsuario lo que va a contener es la lista de las personas que se van a registrar.
    
    function guardarDatos () {                                                                                  // el guardar datos solo es el nombre de la funcion.
      let datos = {                                                                                       // La variable datos guarda objectos o todo lo que esta  escrito adentro de ahi 
        nombre: registrarsenombre.value,
        apellidos: inputApellidos.value,
        edad:inputEdad.value,
        telefono:inputTelefono.value,
        correo:inputCorreo.value,
        contrasena:inputContrasenia.value
      } 
      
      listaUsuario.push(datos)                                                          // aqui lo que hice fue el nombre de la variable y el push es para que se guarde todo lo que voy a escribir y escribo entre parentesis lo que me va a guardar 

      localStorage.setItem("usuarios",JSON.stringify(listaUsuario))                                 // esta linea quiere decir que local me va a guardar todos los  usarios que estan dentro de la listaUsuarios y el json es para que se registren varias personas
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
            alert("AGREGA TUS DATOS")    
       }

    let Edadpersona = inputEdad.value
    let Edadconvertida = parseInt(Edadpersona)
    console.log(Edadpersona)
      if ( Edadconvertida >= 18) {
        alert("TE HAS REGISTRADO CON ÉXITO ")
        
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

try {
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

}catch (error) {
}   
// cambiar para que la informacion de la otra persona no le caiga encima a la otra, osea hacer que se vea la informacion de cualquiera pero sin tener que tapar la otra. 'esto lo hago con arreglos'
  
// voy a comenzar a trabajar con el portafolio  |
  //                                            V


  let article = document.getElementById("sobremihidden1")                                      // este let lo llame asi porque asi se llama la variable. el getelement lo que hace es llamr al id
  let enlace1 = document.getElementById("enlace")                                           // este let nombre asi solo porque quise. getelement lo nombre asi porque asi se llama el id
  function sobremi() {                                                                        // lo nombre "sobremi" porque tenia que crearle un nombre y ese nombre solo lo tengo aqui.
      /*let experiencias = document.getElementById("informacionproyecto")   */  
    article.classList.toggle("hidden")    // el hidden que esta aqui es el class que esta dentro de article
  }

  enlace.addEventListener("click",()=>{                                                // este enlance es el id que esta <a id="enlace" href="#sobremiid">
     sobremi();                                                                         // este sobremi es el nombre que le di a la  funcion 
  })

  let experiencias = document.getElementById("informacionproyecto")             //aqui le cree una variable llamada experiencias
  let EnlaceProyecto = document.getElementById("enlaceproyecto")                 // cree la variable EnlaceProyecto
  function Experenciaproyecto() {                                                  // le di un nombre cualquiera a la funcion
    experiencias.classList.toggle("INFPROYECTO")                                             // aqui llame a la variable experiencias| el infproyecto es la clase del div "el que esta en el proyecto" 
  }
enlaceproyecto.addEventListener("click",()=>{
    Experenciaproyecto()
})

let habilidadesblan = document.getElementById("informacionhabilidades")
let Enlacehabilidadesb = document.getElementById("enlacehabilidades")
function HABILIDADESBLANDAS() {
  habilidadesblan.classList.toggle("INFHABILIDADES")
}
enlacehabilidades.addEventListener("click",()=>{
  HABILIDADESBLANDAS()
})

let contactame  = document.getElementById("informacioncontacto")
let Enlacecontacto = document.getElementById("enlacecontacto")
function CONTACTO() {
  contactame.classList.toggle("INFContacto")                                                 //primmero agregue la variable y luego classlist.toggle y luego el id
}
enlacecontacto.addEventListener("click", ()=>{
  CONTACTO()
})