//ordena un array de números de menor a mayor
var array = [1, 12, 5, 8, 3, 7, 10, 2, 6, 4, 9, 11];
array.sort(function(a, b) {
    return a - b;
    });

console.log(array);