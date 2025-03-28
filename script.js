//-----------------Funtions and stuff----------------

//GLobal variables
let number1 = 0, number2 = 0, operator = '';


// const add = function(num1,num2) {
//     let sum=num1+num2;
//     return sum;
//   };

  
//   const subtract = function(num1,num2) {
//       let sub=num1-num2;
//     return sub;
//   };

//writing a little smaller with =>

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (num1,num2) => num1/num2;

function operate(num1,num2,oper) {
    switch (oper) {
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
        default:
            console.log('there was an error in the operand')
            break;
    }
}


console.log(operate(1,3,'+'));


//--------------------DOM modification-------------------
const contnum = document.querySelector("#contnums");
// the #cointainer is thelling the querySelector that I am looking for something with id="container"
const container = document.querySelector("#container");


for (let index = 9; index > 0; index--) {
    const numbutt = document.createElement('button');
    contnum.appendChild(numbutt);
    numbutt.classList.add('numButton');
    numbutt.textContent = index;
}

const zerobutt = document.createElement('button');
container.appendChild(zerobutt);
zerobutt.classList.add('numButton');
zerobutt.textContent = 0;