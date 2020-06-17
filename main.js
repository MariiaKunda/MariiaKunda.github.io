let mybl = document.getElementById('magic');

let chislo = 10;
let chislo2 = 8;
let ch3 = 2;
let ch4 = 17;
function multiply(num1, num2){
     return num1 * num2;
}
let res = multiply(chislo, chislo2);
let res2 = multiply(ch3, ch4);

 console.log(multiply(chislo, chislo2));
 console.log(multiply(ch3, ch4));
 console.log(multiply(chislo2, ch4));
 console.log(res);
 mybl.innerText = res;
 mybl.innerText = mybl.innerText+"/n"+res2;