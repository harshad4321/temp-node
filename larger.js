var read = require('readline-sync')
num1=read.question('enter two number:')
num2=read.question('')
console.log(num1,num2)
console.log(num1===num2)
if (num1>num2){
    console.log('large numberr is '+num1)
}else{
    console.log('large number is '+num2)
}