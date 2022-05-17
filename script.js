let numeros = [1, 2, 4, 8]



//Cadu:

function somar(array) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total;
}
 // CADU VAI MANDAR NO DISCORD?


//Kevilyn:

const array = [1, 2, 4, 8];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("Teste Kev:")
console.log(sum);

console.log("Teste Cadu:");
console.log(somar(numeros));


//Raphael:


function soma(arrayDeNumeros) {
    for (let i = 0; i < numeros.length; i++) {

        let soma = numeros.reduce(function (acc, valorAtual) {
            return acc + valorAtual
        })
        return soma;
    }

}

console.log(soma(numeros))


//Leandro:
const array = [1, 2, 3, 4];
let sum = 0

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("Leandro_Teste")
console.log(sum);





//Diego
let numeros = [1, 2, 4,8]
function somar (array){
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total;
}
console.log("meuteste");
console.log(somar(numeros));
