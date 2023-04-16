//Bienvenida
let nombreIngresado = prompt("Ingrese su nombre ");
alert("Bienvenido/a " + nombreIngresado);

var idiomaElegido = prompt("Que idioma deseas aprender?");
console.log("Buscando el curso...");

//Decalaración de variables y constantes
let costoIngles = 50;
let costoJapones = 80;
let costoFrances = 100;
let costoAleman = 100;
const coin = "USD";

//Condicionales
if (idiomaElegido == "ingles") {
  alert("El monto a abonar seria de " + costoIngles + " " + coin);
} else if (idiomaElegido == "japones") {
  alert("El monto a abonar seria de " + costoJapones + " " + coin);
} else if (idiomaElegido == "frances") {
  alert("El monto a abonar seria de " + costoFrances + " " + coin);
} else if (idiomaElegido == "aleman") {
  alert("El monto a abonar seria de " + costoAleman + " " + coin);
} else {
  alert("El curso ingresado no está disponible");
}

//Ciclos
for (let turnos = 1; turnos <= 30; turnos++) {
  let claseAgendada = prompt("Quisieras agendar su primera clase gratis?");
  if (claseAgendada == "no") {
    alert(
      "Gracias por visitarnos, nos vemos cuando te decidas a tomar un curso!"
    );
  } else if (claseAgendada == "si") {
    alert("Genial, estaremos agendando tu turno...");
    alert("Turno Nº " + turnos + " Nombre: " + nombreIngresado);
  }
  if (claseAgendada == "si") break;
}

let respuestaIva = prompt("Quieres ver tu precio mas iva?");
if (respuestaIva == "no") {
  alert(
    "Gracias por visitarnos, nos vemos cuando te decidas a tomar un curso!"
  );
} else if (respuestaIva == "si") {
  alert("Gracias!Estarás viendo tu monto total en la consola");
}

//Funciones
let idioma = prompt("Ingrese nuevamente el curso que eligió");
function calculoIva(idioma) {
  const iva = 1.21;
  let costoIngles = 50;
  let costoJapones = 80;
  let costoFrances = 100;
  let costoAleman = 100;
  switch (idioma) {
    case "ingles":
      return costoIngles * iva;
      break;
    case "japones":
      return costoJapones * iva;
      break;
    case "frances":
      return costoFrances * iva;
      break;
    case "aleman":
      return costoAleman * iva;
      break;
    default:
      return 0;
      break;
  }
}
//Llamando el resultado por la consola
console.log(calculoIva(idioma));
