// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((Element, index) => element);
*/

const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){return num * num})
console.log(numbersSquare)



/*
// Recorrer una lista con un ciclo for y crear una nueva lista

// recorrer la lista original 
for (num = 0; num < numbers4.length; num++){
    number = numbers4[num]
    // console.log(number)
}

// Crea una nueva lista
const numbersSquare = numbers4.map(function(number){
    // multiplica los elementos de la lista
    let numbSquare = number * number
    return  `${number} ^ 2 = ${ numbSquare } \n`
})

console.log(numbersSquare) */