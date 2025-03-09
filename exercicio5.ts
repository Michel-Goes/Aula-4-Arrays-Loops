// Faça um programa que conta quantas letras "a" existem numa determinada 
// palavra. Imprima o resultado na tela 

let qualquer_palavra: string = "amora".toUpperCase()

let contagem: number = 0

for (let letra of qualquer_palavra){
    if (letra == "A"){
        contagem += 1
    }
}

if (contagem > 0){
    console.log(`Foi encontrado a letra "A" ${contagem} vezes na palavra ${qualquer_palavra}`)
} else{
    console.log(`Não foi encontrado a letra "A" na palavra ${qualquer_palavra}`)
}