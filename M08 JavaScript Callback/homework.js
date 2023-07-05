/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   if(nombre.length > 0) {
      var primeraLetra = nombre.split ('')[0].toUpperCase();
      var nombreMayus = primeraLetra + nombre.slice(1);
      console.log(nombreMayus);
      return nombreMayus;
      }else {
         return 'Ingrese un nombre'
      }
}
// mayuscula('mario')
function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}
// function suma(){
//    return 2 + 2
// }
// console.log(invocarCallback(suma))

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
 cb(num1, num2)
}
function suma(a, b){
   return a + b 
}
console.log(operacionMatematica(1,2, suma))

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   let suma = 0;
   for(let i = 0; i < arrayOfNumbers.length; i ++) {
      suma+= arrayOfNumbers[i]
   }
   cb(suma)
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   for (let i = 0; i < array.length; i ++) {
      cb(array[i])
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   // let newArray = []
   //    for (let i = 0; i < array.length; i ++){
   //    newArray[i] = cb(array[i]) 
   // }
   // return newArray
   return newArray = array.map(elemento => cb(elemento));
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   return arrayOfStrings.filter(elemento=> elemento [0] ==='a')
   // let newArray = []
   // for(let i = 0; i < arrayOfStrings.length; i ++){
   //    if(arrayOfStrings[i][0] === 'a'){
   //       newArray.push(arrayOfStrings[i])
   //    }
   // }
   // return newArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
