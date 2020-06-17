let bltop = document.getElementById('vanish');

let greeting = ПРИВИТ;

function sayHello() {
     let name = document.getElementById('name').value;
     return alert(greeting + name);
}

console.log(sayHello());

let num1 = 7;
let num2 = 5;

function division(num1, num2) {
     let nol = 0;

     // !== - не равно 

     if (num2 !== nol) {
          return num1 / num2;
     } else {
          return 'delim na nol';
     }
}
console.log(division(num1, num2));

function echo() {
     let str = 'echo';
     let i = 0;
     for (i; i >= 3; i++) {
          console.log(str);
     }
}
echo();