

/* Ejercico con la sentencia SWITCH para averiguar que dia de la semana es segun el numero */
/* Tener en cuenta que el dia 1 es el lunes y el 7 el domingo */
/* Elegir un valor entre 1 y 7, fuera de esos sera valor invalido */


let diaNumero = 2; /* Pueden introducir cualquier numero aqui */
let diaTexto;

switch (diaNumero){
    case 1:
        diaTexto = "Lunes"
        break;
    case 2:
        diaTexto = "Martes"
        break;
    case 3:
        diaTexto = "Miercoles"
        break
    case 4:
        diaTexto = "Jueves"
        break
    case 5:
        diaTexto = "Viernes"
        break;
    case 6:
        diaTexto = "Sabado"
        break;
    case 7:
        diaTexto = "Domingo"
        break;
    default:
        diaTexto = "Valor invalido, ingrese un numero entre 1 y 7"
}

console.log(diaTexto);
