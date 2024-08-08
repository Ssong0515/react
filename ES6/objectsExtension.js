// objects1.js

// 객체확장표현식, 구조분해할당

console.log("\n---- ES5의 객체 표현식 ----\n");

var x = 10;
var y = 20;
var obj = {x: x, y: y};
console.log(obj);

var randomKeyString = "other";
var combined = {};
console.log(combined);

combined["one" + randomKeyString] = "some value"
console.log(combined);

// object 타입 선언과 동시에 데이터 추가, 함수도 추가
var obj2 = {
  x: x,
  methodA: function(){
    console.log('method A');
  },
  methodB: function(){
    return 0;
  }
};
console.log(obj2);
console.log(obj2.x);
obj2.methodA();
console.log(obj2.methodB());

console.log("\n---- ES6의 객체표현식 -----\n");

var x = 10;
var y = 20;

// ES6 방식으로 object 타입을 선언과 동시에 데이터를 입력 시, value로 이미 선언된 변수를 사용할 경우 key를 생략 가능
// value로 사용하는 변수의 이름을 자동으로 key명으로 사용하고, 변수에 저장된 값을 value로 사용함
var obj = {x, y};
console.log(obj);

// object 타입을 선언과 동시에 데이터를 입력
// 구조분해할당 방식을 사용하여 object 타입의 변수를 선언과 동시에 데이터를 입력
var randomKeyString = 'other';
var combined = {['one' + randomKeyString] : 'some value'};
console.log(combined);

var obj2 = {
  x,
  methodA(){
    console.log('method A');
  },
  methodB(){
    return 0
  }
};

console.log(obj2);
console.log(obj2.x);
obj2.methodA();
console.log(obj2.methodB());
