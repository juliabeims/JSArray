let students = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"]
//queremos tirar a "ana"  "caio" e joão 
let studentsDeleted = ["Ana","João", "Caio"] 

students = students.sort((a,b) => a.localeCompare(b))
studentsDeleted = studentsDeleted.sort((a,b) => a.localeCompare(b))

//let anaIndex = students.findIndex( (a) => a == "Ana" )

let studentsDeletedIndex =[]

studentsDeleted.forEach(findStudentIndex)

function findStudentIndex (item) { studentsDeletedIndex.push( students.findIndex( (a) => a == item ))}

//console.log(studentsDeletedIndex)

studentsDeletedIndex.forEach((item,index) => students.splice((item - index),1))

console.log(students)

