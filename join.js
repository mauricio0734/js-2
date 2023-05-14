//Crear una función join que reciba un arreglo y retorne un string con todos 
//los elementos separados por espacio sin usar el método join de los arreglos.

function join(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
      string += array[i] + " ";
    }
    return string.trim();
  }
  
  console.log(join([1, 2, 3, 4, 5, 6, 7])); 
  console.log(join([10, 8, 12, 5, 21, 54, 102, 7, 25]));
  


