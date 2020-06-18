// это первое
let test = function anonimous() {
    return "I am function expression"
}
anonimous();

// это второе
function mch1(num) {
    return num * 5;
}
function mch2(num) {
    return num * 10;
}
function multiplyChain(num) {
    let five = mch1(num);
    let ten = mch2(five);
    return ten;
}
console.log(multiplyChain(3));