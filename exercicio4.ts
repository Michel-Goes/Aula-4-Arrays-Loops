// Faça um programa que percorra uma lista de usuários para encontrar o 
// usuário "João". Caso encontre, imprima "Encontrado", caso contrário, 
// imprima "Não encontrado"

let usuarios: string[] = ["Diogo", "Rafael", "Mariana", "Fernanda",
"André", "Ricardo", "João", "Gabriel", "Patrícia"]
let nome_procurado: string = "João"
let encontrado 

for (let nome of usuarios){
    console.log(nome)
    if (nome == nome_procurado){
        encontrado = true
        console.log(`\x1b[1A${nome} - Encontrado!\r`)
        break
    }
}

if (!encontrado){
    console.log(`O nome ${nome_procurado} não foi encontrado nesta lista.`)
} else{
    console.log(`O nome ${nome_procurado} foi encontrado na lista.`)
}