// Asignación por valor
let a = 5;
let b = a; // b toma el valor de a
console.log(a);
console.log(b);
b = 10; // Modificamos b
console.log(a); // Output: 5 (a no se ve afectada por el cambio en b)
console.log(b); // Output: 10

// Asignación por referencia
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 hace referencia a arr1  arr2->arr1 hereda su posicion de memoria
arr2.push(4); // Modificamos arr2
console.log(arr1); // Output: [1, 2, 3, 4] (arr1 se ve afectada por el cambio en arr2)
console.log(arr2); // Output: [1, 2, 3, 4]
console.log(`.........................................`);
//  Funcion con Asignacion por valorr
function incrementar(numero) {
  numero++; // = numero = numero + 1
  console.log(numero); // Output: 6
}

let x = 5;
incrementar(x); // x++ ||  x = x + 1
console.log(x); // Output: 5 (x no se ve afectada por la función)

//  Funcion con Asignacion por referencia
function agregarElemento(array) {
  array.push(4);
  console.log(array); // Output: [1, 2, 3, 4]
}

let arr = [1, 2, 3];
agregarElemento(arr);
console.log(arr); // Output: [1, 2, 3, 4] (arr se ve afectada por la función)
console.log(`.........................................`);
// DIFICULTAD EXTRA (opcional):
// * Crea dos programas que reciban dos parámetros (cada uno) definidos como
// * variables anteriormente.
// * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
// *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
// *   se asigna a dos variables diferentes a las originales. A continuación, imprime
// *   el valor de las variables originales y las nuevas, comprobando que se ha invertido
// *   su valor en las segundas.
// *   Comprueba también que se ha conservado el valor original en las primeras.
// */

function intercambiorPorValor(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
  }
  
  let originalA = 5;
  let originalB = 10;
  
  let intercambiados = intercambiorPorValor(originalA, originalB);
  
  console.log("Valores originales:");
  console.log("Original A:", originalA);
  console.log("Original B:", originalB);
  
  console.log("\nValores intercambiados:");
  console.log("Intercambiado A:", intercambiados[0]);
  console.log("Intercambiado B:", intercambiados[1]);
  console.log(`.........................................`);

// Intercambio de posiciones con Arrays 
  function intercambiarPorReferenciaArray(arr) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
  }

  function intercambiarPorReferenciaArray(arr) {
    if (arr.length >= 2) {
      let temp = arr[0];
      arr[0] = arr[arr.length - 1];
      arr[arr.length - 1] = temp;
    }
    return arr;
  }
  
  let originalArray = [5, 10, 15, 20, 25];
  
  let intercambiadoArray = intercambiarPorReferenciaArray([...originalArray]);
  
  console.log("Valores originales:");
  console.log("Original Array:", originalArray);
  
  console.log("\nValores intercambiados:");
  console.log("Intercambiado Array:", intercambiadoArray);
  console.log(`.........................................`);

//Intercambio de posiciones pero con Objetos
  function intercambiarPorReferencia(objeto) {
    let temp = objeto.a;
    objeto.a = objeto.b;
    objeto.b = temp;
    return objeto;
  }
  
  let originalObjeto = {a: 5, b: 10};
  
  let intercambiadoObjeto = intercambiarPorReferencia({...originalObjeto});
  
  console.log("Valores originales:");
  console.log("Original A:", originalObjeto.a);
  console.log("Original B:", originalObjeto.b);
  
  console.log("\nValores intercambiados:");
  console.log("Intercambiado A:", intercambiadoObjeto.a);
  console.log("Intercambiado B:", intercambiadoObjeto.b);