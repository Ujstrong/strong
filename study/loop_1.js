let j=0;  //수정이 가능한 변수 (초기화 필수)
const i=0; //수정이  불가능한 변수

console.log('출력') //출력 + 줄띄움

let str= ''

for(let i = 0; i<5 ; i++) {
    str += '*'
    console.log(str)
}

let str1 ='1234567'

console.log(str1.slice(3, 5))   //3까지 자르고 5까지 출력하겠다는 뜻

let str2 = '*****'

for(let i = 0; i<5; i++) {
    console.log(str2.slice(i))

}


let str3 = ''
let str4 = '    '

for(let i = 0; i<5; i++) {
    str3 += '*'
    console.log(str4.slice(i) + str3)

}


let str5 = '*****'
let str6 = ''

for(let i = 0; i<5; i++) {
    
    console.log(str6 + str5.slice(i))
    str6 += ' '
}