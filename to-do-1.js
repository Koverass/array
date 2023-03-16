// Push al frente
//Inserta el valor al princippio del array
function pushFront(arr, val) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    };
    arr[0] = val;
    return arr;
}

console.log('Push Front:');
console.log(pushFront([5,7,2,3], 8)); 
console.log(pushFront([99], 7)); 



// Pop al frente
// Dada una matriz, elimina y devuelve el valor al principio de la matriz. Haz esto sin utilizar ningún método de matriz incorporado, excepto pop().
function popFront(arr) {
    console.log('Remaining', arr.slice(1, arr.length));
    return arr[0];
}

console.log('Pop Front:');
console.log(popFront([0,5,10,15]));
console.log(popFront([4,5,7,9])); 



// Insertar
// Dado una matriz, índice y valor adicional, inserta el valor en la matriz en el índice dado. Haz esto sin utilizar métodos de matriz integrados. Puedes pensar en pushFront(arr, val) como equivalente a insertAt(arr, 0, val).
function insertAt(arr, idx, val) {
    for (var i = arr.length; i > idx; i--) {
        arr[i] = arr[i-1];
    }
    arr[idx] = val;
    return arr
}

console.log('Insert At:');
console.log(insertAt([100,200,5], 2, 311)); 
console.log(insertAt([9,33,7], 1, 42)); 



// Eliminar en
// Dada una matriz y un índice en una matriz, elimina y devuelve el valor de la matriz en ese índice. Haz esto sin usar métodos de matriz integrados, excepto pop(). Piensa en popFront(arr) como equivalente a removeAt(arr, 0).
function removeAt(arr, idx) {
    var value = arr[idx];
    for (var i = idx; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    
    console.log(`Removed value: ${value}`)
    return arr.slice(0, arr.length-1) 
}

console.log('Remove At:');
console.log(removeAt([1000,3,204,77], 1)); 
console.log(removeAt([8,20,55,44,98], 3)); 



// Pares de intercambio
// Intercambia posiciones de pares sucesivos de los valores de una matriz dada. Si la longitud es impar, no cambies el elemento final. Para [1,2,3,4], devuelve [2,1,4,3]. Por ejemplo, cambia la entrada ["Brendan", verdadero, 42] a [verdadero, "Brendan", 42]. Al igual que con todos los desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado.
function swapPairs(arr) {
    for (i=0; i<arr.length-1; i+=2) { 
        temp = arr[i]
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr
}

console.log('Swap Pairs:');
console.log(swapPairs([1,2,3,4])); 
console.log(swapPairs(["Brendan",true,42]));



// Eliminar duplicados
function removeDupes(arr) {
    var i = 0
    while (i < arr.length - 1) {
        if (arr[i] === arr[i+1]) {
            arr = removeAt(arr, i+1); 
        } 
        else {
            i++;
        }
    }
    return arr;
}

console.log('Remove Duplicates:');
console.log(removeDupes([-2,-2,3.14,5,5,10])); 
console.log(removeDupes([9,19,19,19,19,19,29]));