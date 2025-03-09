// Crie um array de números aleatórios e faça um programa que 
// calcula e imprima na tela a soma dos itens de um array
// Requesitos: usar o loop for tradicional

let numeros_aleatorios: number[] = [30, 15, 23, 22, 10]
let quantidade_itens: number = numeros_aleatorios.length
let soma = 0

for (let posicao: number = 0; posicao < quantidade_itens; posicao++){
    console.log(numeros_aleatorios[posicao])
    let numeros_guardados: number = numeros_aleatorios[posicao]
    soma += numeros_guardados
}

console.log(`A soma de todos os números dessa lista é ${soma}`)

// let lista: number[] = [30, 15, 23, 22, 10]
// let quantidade_itens: number = lista.length
// let c: number = 0
// let soma: number = 0

// while (quantidade_itens > c){
//     let numeros_guardados: number = lista[c]
//     console.log(numeros_guardados)
//     c++
//     soma+=numeros_guardados
// }

// console.log(`A soma de todos os números dessa lista é ${soma}`)