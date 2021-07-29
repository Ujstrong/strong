// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name'; 
{
let name = 'jisoo';  // name 선언, 값 할당
console. log(name);
name = 'hello';
console.log(name);
}

console.log(name);   // 블럭 안에 있기 때문에 접근할 수 없다.
console.log(globalName); // 글로벌 변수라서 어느 곳에서나 접근 가능

// var (don't ever use this!)
// var hoisting(어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것)
// has no block scope (var은 블럭 스콥을 철저히 무시하기 때문에 쓰면 안된다.)
{
age = 4;
var age;
}
console.log(age);

// 3. Contants
// favor immutable data type always for a few reasons:
// 한번 할당하면 절대 값이 바뀌지 않음
// - security 보안
// - thread safety 
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types

// primitive, single item: number, string, boolean, null, undefined. symbol
// object, box container
// function, first-class function

const count = 17;  // integer
const size = 17.1; // deciamal number
console.log('value: ${count}, type: ${typeof count}');
console.log('value: ${name}, type: ${typeof size}');

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const nagativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(nagativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2*52) 숫자 제일 뒤에 n만 붙이면 bigInt로 간주
console.log('value: ${bigInt}, type: ${typeof bigInt}');
Number.MAX_SAFE_INTEGER;

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log('value: ${greeting}, type: $typeof greeting}');
const helloBob = 'hi $brendan}!';  // template literals (string)
console.log('value: ${helloBob}, type: ${typeof helloBob}');

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log('value: ${ consst test : boolean eof canRead}');
console.log('value: ${test}, type: $type: ${typeof test}');

// null
let nothing = null;
console.log('value: ${nothing}, type: ${typeof nothing}');

// undefined
let x;
console.log('value: ${x}, type: ${typedof x}');

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  // true
console.log('value: ${symbol1.description}, type: ${typeof }');