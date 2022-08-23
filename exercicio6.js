var number = [10,6.5,8,7.5]
var soma = 0

/*

for(var i = 0; i<number.length; i++){
    soma += number[i]   
}

*/

number.forEach((element) => soma += element  )


var media = soma/number.length




console.log(media)
