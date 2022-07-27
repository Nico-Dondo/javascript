
// Declaracion de variables y funciones para un algoritmo simple//
//const edadMinima = 18;
//const edadMaxima = 70;

// let ingresarNombre = prompt("Ingrese su nombre");
// let ingresarEdad = prompt("Ingrese su edad");

//let ingresarNombre = prompt("Ingrese su nombre");
//let ingresarEdad = prompt("Ingrese su edad");

//Estas variables no están sirviendo en este caso.
// const primeraRespuesta = ("Si");
// const segundaRespuesrta = ("No")

//En tu código no haría falta usar un while, ya que solo necestiamos saber si es mayor o menor de edad nada mas.
//while (ingresarEdad != "N") {

    //Este if solo no me está ayudando en nada, ya que una vez que pregunte eso, no ejecuto nada mas. 
  //  if (ingresarNombre != " ");

    //Acá por ejemplo tiene mas sentido, ya que si es menor no puede responder las preguntas
    //if (ingresarEdad < 18) {
      //  console.log("no puedes realizar este cuestionario");
        //alert("No puedes realizar este cuestionario");
        //Lo mismo pasa acá con mayor de edad, pero hay que corregir la comparación. Si coloco que la edad es de 18 que pasa? NADA. Entonces el comparador debería ser ingresarEdad >= 18.
    //} else if (ingresarEdad >= 18) {
        //Acá es donde deberías colocar todos los propmt que colocaste abajo.
      //  console.log("Puedes continuar");
        //alert("Puedes continuar")
    //}
    //let primeraPregunta = prompt("Esta de acuerdo con la imagen del Presidente?")

    //Estos if no sirven en ningun caso. Ya que las comparaciones no tienen lógica alguna. Estas comparando strings y no es algo que nos de un valor de verdad
    //if (primeraPregunta || "primeraRespuesta" + "segundaRespuesta");
    //console.log("continuamos");
    //let segundaPregunta = prompt("Cree que la situacion mejorara?");
    //if (segundaPregunta || "primeraRespuesta" + "segundaRespuesta");
    //let terceraPregunta = prompt("Votaria un cambio en las proximas elecciones?");
    //if (terceraPregunta || "primeraRespuesta" + "segundaRespuesta");
    //alert("Gracias por responder");
    // Y este break no hace falta acá porque no estarías cortando un ciclo.
    //break
//}


/**
 * Este es el código como debería ser de verdad. Primero, fijate bien como uso cada condicional y cada variable. Y practica, ya que ahora este lo voy a hacer yo mismo, pero es mejor que hagas otro flujo de trabajo para practicar mas y se te queden los conocimientos.
 */

//Para probar este código comenta el código anterior.

//let ingresarEdad = prompt("Ingrese su edad");
//let ingresarNombre = prompt("Ingrese su nombre");


//Acá uso el if para preguntar si es mayor o igual a 18 años. SI lo es, entonces ejecuto el código que tengo dentro.
//if (ingresarEdad >= 18) {
//    alert(ingresarNombre + " puedes continuar")
    //En este caso no guardo los prompt en una variable, ya que no los estoy usando para nada. Pero si quisiera usar las respuestas, las guardo en una variable y las uso para mostrarlos en un alert por ejemplo.
//    prompt("Esta de acuerdo con la imagen del Presidente?")
//    prompt("Cree que la situacion mejorara?");
//    prompt("Votaria un cambio en las proximas elecciones?");
    //Si no es mayor o igual a 18 entonces le aviso al usuario que no puede realizar el cuestionario.
//} else {
//    alert(ingresarNombre + " no puedes realizar este cuestionario, eres menor de edad");

//}
//Mensaje de Bienvenida al Bar
alert ("Bienvenidos a Dali-Bar");

let ingreseNombre = prompt ("Ingrese su Nombre")
let ingreseApellido = prompt ("Ingrese su Apellido")
let ingreseCodigo = prompt("Ingrese codigo Dali para ingresar")

if (ingreseCodigo != "Ingrese codigo Dali para ingresar"){
    alert (ingreseCodigo  + "Continuamos")
    prompt ("Quiere resevar para cenar?")
    prompt ("Quiere reservar para Jam?")
    prompt ("Quiere Reservar para cantobar?")
  
} 

alert ("Si no encuentra su opcion por favor ponganse en contacto con nosotros")