// 1번
console.log(`--------[1번]--------`)
let sum = 0

for(let i=1; i<=100; i++) {
    sum += i
}

console.log(sum)

// 2번
console.log(`--------[2번]--------`)

let str = ''

for(let i = 1; i <=5; i++){
    str += i + ' '
    console.log(str)
}

// 3번
console.log(`--------[3번]--------`)

let i, k = 0;

for(i =2; i<= 9; i++){
    for(k = 1; k<=9; k++){
        console.log(`${i} x ${k} = ${i*k}`)
    }
}

// 4번

console.log(`--------[4번]--------`)

const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.on('line' , line => {
		//line 에는 입력된 "문자열"을 보여준다. 이를 이용하면 된다
    process.exit() // 이 코드가 프로그램을 종료하는 코드이다
})


