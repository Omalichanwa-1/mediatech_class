
//conditional statement

document.write('Control Flow')
//write a program that determine if a number is an even number or not
var number_value = 15;
var even_odd = number_value % 2;
if(even_odd == 0){
    
    console.log('even')
}else{
    
    console.log('odd')
}


// password checker

let password1 = 12345
let password2 = 12345

if (password1 != password2){
    console.log('Password not')
}else{
    console.log('password match')
}

//Grade system
//A=70+, b=50-70, c=49-50

const test = 40;
const exam = 9;
var total = 47

if(total > 70){
    console.log('A= EXELLENT' + " " + 'your score is', + total)
}else if(total < 70){
    console.log('B = Very Good', total)
}else if(total <= 49){
    console.log('c = Very Good', total)
}else{
    console.log('you fail')
}



//Loops

//for loop



var x = 10
for(let i= 0; i<x; i++){
    console.log(i)

}

// while loop
var i = 0
while(i<x){
    console.log('from while loop: ', i)
    i++
}

//do while loop
var i = 0;
var x = 10;
do{
    console.log('from do loop', i);
    document.write('from do lopp', i)
   i++
}while(i<x){
    console.log('from do loop',i);
    
}

var day = 'Monday'
switch(day){
    case  'Tuesday':
        function myfunc(){
            console.log('from function',day)
        }
        myfunc()
        break;
    case 'Monday':
        console.log('tuesday')
        break
    case 'Wednessday':
        console.log('tuesday')
    break
}
  