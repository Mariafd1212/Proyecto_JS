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

//Objetos
class User {
  constructor(nombre, clave, mail) {
    this.nombre = nombre;
    this.clave = clave;
    this.mail = mail;
  }

  presentar() {
    console.log("Hola soy " + this.nombre);
  }
}
const user1 = new User("Maria", "12345", "mariafd2424@gmail.com");
user1.presentar();

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.agotado = false;
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
  vender() {
    this.agotado = true;
  }
}
const producto1 = new Producto("Ingles", "50");
const producto2 = new Producto("Japones", "80");

producto1.sumaIva();
producto2.sumaIva();

console.log(producto1.agotado);

producto1.vender();

console.log(producto1.agotado);

//Arrays
const participantesSorteo = [
  "Maria Flores",
  "Leonardo Arias",
  "Tomás Jimenez",
  "Victoria Remirez",
  "Cristian Miglionico",
  "Patricia Perez",
  "Erick Leprito",
  "Matias Povesi",
  "Ana Quevedo",
  "Melina Flores",
  "Natalia Quintero",
  "Pedro Tomatti",
  "Laura Nava",
];

let random = Math.random() * participantesSorteo.length;
random = Math.floor(random);

console.log(participantesSorteo[random]);

/* //Calendario
const calendar = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

class Tabla {
  construct(clr) {
    this.cuadro = document.createElement("div");
    this.cuadro.innerHTML = clr;
    this.cuadro.style.backgroundColor = clr;
    this.cuadro.style.height = "40px";
    this.cuadro.style.width = "40px";
    this.cuadro.style.margin = "1px";
  }
}

for (let i = 0; i < 31; i++) {
  let cuadroLunes = new Tabla(calendar[i % 7]);
  cuadroLunes.cuadro.innerHTML = i;
  document.getElementById("calendar").appendChild(cuadroLunes.cuadro);
}
 */
