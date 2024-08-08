// templateString.jsx

console.log("기존 ES5 에서 문자열 사용")

var string1= '안녕하세요';
var string2 = '반값습니다.';
var greeting = string1 + ' ' + string2;
var product = {name: '도서', price: '4200원'};
var message = '제품' + product.name + '의 가격은' + product.price + '입니다.';
var value1 = 1;
var value2 = 2;
var boolvalue = false;
var operator1 = '곰셈값은' + value1 * value2 + '입니다'
var operator2 = '불리언값은' + (boolvalue ? '참' : '거짓') + '입니다.';
var multiLine = '문자열 1\n문자열2';

console.log(greeting);
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiLine);