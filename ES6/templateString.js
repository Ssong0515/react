// templateString.js

// 템플릿 문자열
// ES6 문법에서 문자열을 연산식과 함께 사용 시, 조금 더 쉽게 사용할 수 있도록 하는 템플릿 문자열을 제공함
// 큰 따옴포(""), 작은 따옴표('') 대신 백틱 (``)으로 문자열을 감싸서 문자열 표현
// 템플릿 문자열 사용 시, 문자열 내부에 ${변수명}을 사용하여 문자열 연결 연산자 없이 바로 문자열과 변수를 함께 사용 가능
// ${ } 안에서 간단한 연산도 가능

console.log('ES5 방식에서 문자열 사용')

var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = string1 + ' ' + string2;

var product = {name: '도서', price: '4200원'};
var message = '제품' + product.name + '의 가격은 ' + product.price + '입니다.';

var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = '곱셈값은 ' + value1 * value2 + '입니다.';
var operator2 = '불리언값은 ' + (boolValue ? '참' : '거짓') + '입니다.';
var multiLine = '문자열 1\n문자열 2';

console.log(greeting);
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiLine);

console.log('ES6 방식에서 문자열 사용')
var string1 = '안녕하세요';
var string2 = "반갑습니다";
var greeting = `${string1}  ${string2}`;

var product = {name: '도서', price: '4200원'};
var message = `제품 ${product.name}의 가격은 ${product.price} 입니다.`;

var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈값은 ${value1 * value2} 입니다.`;
var operator2 = `불리언값은 ${boolValue ? '참' : '거짓'}입니다.`;
var multiLine = `문자열 1
문자열 2`;

console.log(greeting);
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiLine);
