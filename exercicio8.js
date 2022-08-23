const nomes = ["Ana", "Marcos", "Maria", "Mauro"]
const notas = [7, 4.5, 8, 7.5]

var reprovados = nomes.filter((_,indice) => notas[indice] <6)

console.log(reprovados)
