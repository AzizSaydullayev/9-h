let number =[2,4,9,10,45,67,8,90]
let num_1 =[]
let num_2 =[]

for(let i=0; i< number.length; i++){

if(number[i] %2 ==0){
num_1.push(number[i]);
} else{
num_2.push(number[i])
}
}


console.log(number ,"boshlanisdagi array")
console.log(num_1 , "juft sonlarga ajralgan array")
console.log(num_2)