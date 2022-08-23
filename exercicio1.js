//calculando média

let grades = [2,3,4,5]

let sum = grades.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0)

console.log(sum/grades.length)