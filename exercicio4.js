let alunos = ["João", "Juliana", "Caio", "Ana"]
let mediaDosAlunos = [6,7,8,9]

let listaNotasEAluno = [alunos, mediaDosAlunos]

//objetivo: entrar com o nome do aluno e sair com a nota

let notaDoAluno = (nomeAluno) => {
    if(listaNotasEAluno[0].includes(nomeAluno)){
        let indexAluno = listaNotasEAluno[0].indexOf(nomeAluno)
        return nomeAluno + " sua nota é " + listaNotasEAluno[1][indexAluno]

    }else{
        return "Aluno não cadastrado"
    }
}


console.log(notaDoAluno("Jul"))