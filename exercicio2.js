//dividindo turma em dois

let students = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinicius", "Renan", "Renata", "Daisy", "Camilo"]

let studentsOrdered = students.sort( (a,b) => a.localeCompare(b) )

let studentsOrdered1 = studentsOrdered.slice(0, (studentsOrdered.length)/2)

let studentsOrdered2 = studentsOrdered.slice((studentsOrdered.length)/2,studentsOrdered.length)

console.log(studentsOrdered1)
console.log(studentsOrdered2)