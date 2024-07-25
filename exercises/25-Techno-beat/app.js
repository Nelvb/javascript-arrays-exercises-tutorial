// Your code here

function lyricsGenerator(arr) {
    let result = "";
    let countOnes = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            result += "Boom ";
            countOnes = 0; // Reiniciar el contador de unos
        } else if (arr[i] === 1) {
            result += "Drop the bass ";
            countOnes++;
            if (countOnes === 3) {
                result += "¡¡¡Break the bass!!! ";
                countOnes = 0; // Reiniciar el contador después de agregar "¡¡¡Break the bass!!!"
            }
        }
    }

    return result.trim(); // Eliminar el espacio extra al final
}
// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
