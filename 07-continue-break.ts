// BREAK
let frutas: string[] = ["Banana", "Manga", "Pêra", "Ameixa", "Romã", "Caju"]

// FOR OF
for (let fruta of frutas){
    if (fruta == 'Ameixa'){
        break
    }
    console.log(fruta)   
}

// FOR TRADICIONAL
// for (let i=0; i < frutas.length;i++){
//     if (frutas[i] == "Ameixa"){
//         console.log('PARA')
//         break     
//     }
//     console.log(frutas[i])
// }

// WHILE
// let i = 0

// while (i < frutas.length){
//     i++
//     if (frutas[i] == "Ameixa"){
//         break
//     }
//     console.log(frutas[i])
// }
// ___________________________________________________________________
// CONTINUE

// FOR OF
for (let fruta of frutas){
    if (fruta == 'Ameixa'){
        continue
    }
    console.log(fruta)   
}

// FOR TRADICIONAL
// for (let i=0; i < frutas.length;i++){
//     if (frutas[i] == "Ameixa"){
//         continue     
//     }
//     console.log(frutas[i])
// }