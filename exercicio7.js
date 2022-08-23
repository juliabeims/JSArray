const notas = [10,9,8,7,6]

                                // (condição) ? (exp1) : (exp2) 
const notasAtualizadas = notas.map(x => x > 9 ? 10 : ++x)

console.log(notasAtualizadas)



// operador ternário tem uma condição, e duas expressões
// segue formato // (condição) ? (exp1) : (exp2)
// caso seja true, retorna exp1, 
//caso false retorna exp1