// resolve.js
// 구조분해할당
// 배열 및 object 타입의 요소를 변수에 대입하여 할당하는 것
// ES6에서 새로운 방식으로 구조분해할당이 가능함

console.log("\n ---- ES5 방식의 구조분해할당 ---- \n")

var list = [0, 1];
var item1 = list[0];
var item2 = list[1];

var item3 = list[2] || -1;
console.log(list);
console.log(item1);
console.log(item2);
console.log(item3);

console.log(`원본 item1 출력: ${item1}`)
console.log(`원본 item2 출력: ${item2}`)

// ES5 방식의 swap
var temp = item1;
item1 = item2;
item2 = temp;
console.log(`바꾼 후 item1 출력: ${item1}`);
console.log(`바꾼 후 item2 출력: ${item2}`);

var obj = {
  key1: 'one',
  key2: 'two'
};

var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';
var newKey = obj.key1;

console.log(`원본 object 타입 obj의 값 : `)
console.log(obj);
console.log(`key1의 값 : ${key1}`);
console.log(`key2의 값 : ${key2}`);
console.log(`key3의 값 : ${key3}`);
console.log(`newKey의 값 : ${newKey}`);



console.log("\n ---- ES6 방식의 구조분해할당 ---- \n")

var list = [10, 11];
var [item1, item2, item3 = -1] = list;
console.log(`변수 item1 : ${item1}`);
console.log(`변수 item2 : ${item2}`);
console.log(`변수 item3 : ${item3}`);

console.log(`원본 item1 : ${item1}`);
console.log(`원본 item2 : ${item2}`);

// ES6 방식의 swap
[item1, item2] = [item2, item1];
console.log(`변경 후 item1 : ${item1}`);
console.log(`변경 후 item2 : ${item2}`);

var obj = {
  key1: 'one',
  key2: 'two'
};

console.log('원본 obj의 값 : ');
console.log(obj);

// ES6 방식으로 object 타입을 구조분해할당 시 = 연산자 오른쪽에 있는 object 타입이 가지고 있는 요소의 key명과 동일한 변수명을 찾아서 값을 대입함
// = 연산자 왼쪽에 있는 변수명과 같은 key 명이 없을 경우 undefined를 대입
// = 연산자 왼쪽에 있는 변수에 기본값을 설정할 수 있음
// key1: newKey 는 기본 object 타입이 가지고 있는 요소의 key 명인 key1을 가져와서 : 기호 뒤에 있는 이름을 변수명으로 사용하고 object 타입의 key와 매칭되는 value를 새로 생성한 변수에 대입함

var {key2, key1: newKey, key3 = 'default key3 value'} = obj;
console.log(`변수 key1: ${key1}`);
console.log(`변수 key2: ${key2}`);
console.log(`변수 key3: ${key3}`);
console.log(`변수 newKey: ${newKey}`);
