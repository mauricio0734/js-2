
function maxIndex(arreglo) {
    let max = 0;  
    for (let i = 0; i < arreglo.length; i++) {    
      if (arreglo[i] > arreglo[max]) {
        max = i;
      }
    }
    
    return max;
  }

    console.log(maxIndex([1, 2, 3])) // 3
    console.log(maxIndex([10, 8, 12, 5])) // 12
    console.log(maxIndex([])) // undefined
    