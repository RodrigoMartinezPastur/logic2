//tarea 1

function mayorYmenor(array, array2) {
  const numeros = [array, array2];
}

mayorYmenor(Math.min(...[1, 2, 3, 4, 5, 6]), Math.max(...[3, 2, 5, 7, 9]));

//tare 6
function duplicates(array) {
  return new Set(array);
}

let cosas = [1, 1, 2, 2, 3, 3, true, true, "hola", "weones", "weones", "hola"];

duplicates(cosas);

// tarea 2

function strinYCarac(array, caracter) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === caracter) {
      return caracter;
    }
    return false;
  }
}

strinYCarac("buenas tardes", "e");

// tarea 4

function contar(laString, voc1, voc2, voc3, voc4, voc5) {
  for (i = 0; i < laString.length; i++) {
    if (laString[i] === voc1) {
      return voc1;
    } else if (laString[i] === voc2) {
      return voc2;
    } else if (laString[i] === voc3) {
      return voc3;
    } else if (laString[i] === voc4) {
      return voc4;
    } else if (laString[i] === voc5) {
      return voc5;
    }
  }
}

contar("las vocales", "a", "e", "i", "o", "u");

function contar2(laString, voc1, voc2, voc3, voc4, voc5) {
  for (i = 0; i < laString.length; i++) {
    switch (laString[i]) {
      case voc1:
        return voc1;
        break;
      case voc2:
        return voc2;
        break;
      case voc3:
        return voc3;
        break;
      case voc4:
        return voc4;
        break;
      case voc5:
        return voc5;
      default:
        break;
    }
  }
}
contar2("las vocales", "a", "e", "i", "o", "u");

// tarea 5

function eliminarVocal(str) {
  const resultado = str.replace(/[a]/g, "");
  console.log(resultado);
}

const text = "banana";

eliminarVocal(text);
