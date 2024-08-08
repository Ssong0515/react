// operator.js
// 전개 연산자
// ES6에서 추가된 전개 연산자(...) 사용 시, 배열 혹은 object 타입의 전체 요소 및 일부 요소를 다른 배열이나 다른 object 타입으로 빠르게 복사가 가능
// 사용법
// [first, second, three, ...others] = array1;

console.log("----- ES5 방식으로 사용 ----")

// ES5 방식으로 배열 선언 및 데이터 저장
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
console.log(`원본 배열 array1: ${array1}`);
console.log(`원본 배열 array2: ${array2}`);

// 새로운 배열 선언 및 array1, array2 배열 저장
var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log(`배열 combined: ${combined}`);

// ES5에서 제공하는 2개 이상의 배열을 하나로 합쳐주는 함수(concat) 사용
var combined = array1.concat(array2);
console.log(`배열 combined: ${combined}`);

var combined = [].concat(array1, array2);
console.log(`배열 combined: ${combined}`);

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';
console.log("first: " + first);
console.log(`second: ${second}`);
console.log(`second: ${three}`);

console.log("\n---- ES6 방식으로 사용 ----\n")

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
console.log(`배열 array1 : ${array1}`)
console.log(`배열 array2 : ${array2}`)

// ES6 에서 추가된 전개연산자 (...)를 사용하면 배열 혹은 object의 전체 요소 및 요소의 일부분을 다른 배열이나 object 타입에 빠르게 복사 가능
var combined = [...array1, ...array2];
console.log(`배열 combined : ${combined}`);

// ES6 에서 배열의 요소를 변수에 대입할 경우 = 연산자 왼쪽에 []을 사용하고 [] 안에 변수명을 입력
// = 연산자 오른쪽의 배열을 대입
// = 연산자 오른쪽에 있는 배열의 요소를 순서대로 하나씩 꺼내서 = 연산자 왼족에 있는 변수에 순서대로 입력함
// = 연산자 왼쪽에 있는 배열의 크기보다 = 연산자 오른쪽에 있는 변수의 개수가 더 많을 경우 undefined이 대입 됨
var [first, second, three = 'empty'] = array1;
console.log(`first : ${first}`);
console.log(`second : ${second}`);
console.log(`three : ${three}`);

// = 연산자 왼족에 있는 변수에 ... 사용 시 = 연산자 오른쪽에 있는 배열 중 나머지 요소를 모두 배열로 저장
var array3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var [first, second, three = 'empty', ...others] = array3;
console.log(`first : ${first}`);
console.log(`second : ${second}`);
console.log(`three : ${three}`);
console.log(`others : ${others}`);

console.log(`first의 타입: ${typeof first}`);
console.log(`second의 타입: ${typeof second}`);
console.log(`three의 타입: ${typeof three}`);
console.log(`others의 타입: ${typeof others}`);
