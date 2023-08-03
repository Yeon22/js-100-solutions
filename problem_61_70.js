/**
 * 61. 문자열 압축하기
 * 
 * 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
 * 
 * 입력
 * aaabbbbcdddd
 * 
 * 출력
 * a3b4c1d4
 */
const user_s = "aaabbbbcdddd";
let result_s = '';
let store_s = user_s[0];
let count = 0;

for (let i of user_s) {
    if (i === store_s) {
        count += 1;
    } else {
        result_s += store_s + String(count);
        store_s = i;
        count = 1;
    }
}
result_s += store_s + String(count);
console.log(result_s);

/**
 * 62. 20190923출력하기
 * 
 * `20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.
 * 
 * 1. 코드 내에 숫자가 없어야 합니다.
 *     - 예) console.log(20190923)이라고 하시면 안됩니다.
 * 2. 파일 이름이나 경로를 사용해서는 안됩니다.
 * 3. 시간, 날짜 함수를 사용해서는 안됩니다.
 * 4. 에러 번호 출력을 이용해서는 안됩니다.
 * 5. input을 이용해서는 안됩니다.
 */
const user_s62 = "aacdddddddddfffffffffgghhh";
console.log(`${user_s62.match(/a/g).length}${Number(user_s62.match(/b/g))}${user_s62.match(/c/g).length}${user_s62.match(/d/g).length}${Number(user_s62.match(/e/g))}${user_s62.match(/f/g.length)}${user_s62.match(/g/g).length}${user_s62.match(/h/g).length}`);

/**
 * 63. 친해지고 싶어
 * 
 * 한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
 * 딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.
 * 교수님이 줄임말을 배우기 위해 아래와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
 * 입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.
 * 
 * 입력
 * 복잡한 세상 편하게 살자
 * 
 * 출력
 * 복세편살
 */
const user_s63 = "복잡한 세상 편하게 살자".split(' ');
let result_s63 = '';
for (let s of user_s63) {
    result_s63 += s[0];
}
console.log(result_s63);

/**
 * 64. 이상한 엘레베이터
 * 
 * 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
 * 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
 * 
 * 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
 * 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.
 * 
 * 입력
 * 정량 N이 입력됩니다.
 * 
 * 출력
 * 가장 적게 옮길 수 있는 횟수를 출력합니다.
 * 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
 */
let n64 = 24;
let result64 = 0;
while (true) {
    if (n64 % 7 === 0) {
        result64 += parseInt(n64 / 7, 10);
        console.log(result64);
        break;
    }

    n64 -= 3;
    result64 += 1;
    if (n64 < 0) {
        console.log(-1);
        break;
    }
}

/**
 * 65. 변형된 리스트
 * 
 * a = [1, 2, 3, 4]
 * b = [a, b, c, d]
 * 이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
 */
const a = [1, 4, 9, 16];
const b = ['a', 'b', 'c', 'd'];

let c = a.map((e, i) => {
    if (i % 2 === 0) {
        return [e, b[i]];
    } else {
        return [b[i], e];
    }
});
console.log(c);

/**
 * 66. 블럭탑쌓기
 * 
 * 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
 * 순서에 맞게 쌓지 않으면 무너질 수 있습니다.
 * 
 * 예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
 * 선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.
 * 
 * - B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
 * - B 다음 블럭이 C가 될 수 있습니다.
 * 
 * 쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.
 * 
 * 1. 블럭은 알파벳 대문자로 표기합니다.
 * 2. 규칙에 없는 블럭이 사용될 수 있습니다.
 * 3. 중복된 블럭은 존재하지 않습니다.
 * 
 * 입력
 * 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
 * 규칙 = "ABD"
 * 
 * 출력
 * ["가능", "불가능", "가능", "가능", "가능"]
 */
const 전체블럭 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const 규칙 = "ABD";

function solution66(전체블럭, 규칙) {
    let answer = [];

    for (let 부분블럭 of 전체블럭) {
        answer.push(블럭순서체크(부분블럭, 규칙));
    }

    return answer;
}

function 블럭순서체크(부분블럭, 규칙) {
    let 임시변수 = 규칙.indexOf(규칙[0]);
    for (let 문자 of 부분블럭) {
        if (규칙.includes(문자)) {
            if (임시변수 > 규칙.indexOf(문자)) {
                return '불가능';
            }
            임시변수 = 규칙.indexOf(문자);
        }
    }
    return '가능';
}

console.log(solution66(전체블럭, 규칙));

/**
 * 67. 민규의 악수
 * 
 * 광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
 * 참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.
 * 
 * 이 행사에서 진행된 악수는 총 n번이라고 했을 때,
 * 민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
 * 그리고 민규를 포함한 행사 참가자는 몇 명일까요?
 * 
 * - 악수는 모두 1대 1로 진행이 됩니다.
 * - 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
 * - 같은 상대와 중복된 악수는 카운트 하지 않습니다.
 * - 민규를 제외한 참가자는 행사를 모두 마쳤습니다.
 * 
 * 예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.
 * 행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.
 * 
 * 입력
 * 59
 * 
 * 출력
 * [4, 12] // [악수 횟수, 행사 참가자 수]
 */
// const 참가자 = ['a', 'b', 'c', 'd'];
// // 악수를 하는 경우의 수
// 3
// ['a', 'b']
// ['a', 'c']
// ['a', 'd']
// 2
// ['b', 'c']
// ['b', 'd']
// 1
// ['c', 'd']
// 참가자수가 n 이라면
// 악수의 수는 n-1 + n-2 + n-3 + ... + 1 => 일반화하면 n-1(n) / 2
// 참가자가 100명이라면 100 + 99 + 98 + ... + 3 + 2 + 1 == 101 * 50 => 5050
// 일반화하면 n(n+1) / 2
// 그런데 우리는 n-1부터 시작하므로 n-1(n) / 2를 적용하면 된다.

function solution67(n) {
    let 사람 = 0;
    let 총악수 = 0;
    let temp = 0;
    while (true) {
        총악수 = parseInt((사람 * (사람 - 1)) / 2, 10);
        if (n < 총악수) {
            break;
        }
        사람 += 1;
        temp = 총악수;
    }
    return [parseInt(n - temp, 10), 사람];
}

const 악수의수 = 59;
console.log(solution67(악수의수));

/**
 * 68. 버스 시간표
 * 
 * 학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.
 * 버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.
 * 
 * - 버스 시간표와 현재 시간이 입력으로 주어집니다.
 * - 출력 포맷은 "00시 00분"입니다.
 *    만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
 * - 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.
 * 
 * 입력
 * ["12:30", "13:20", "14:13"]
 * "12:40"
 * 
 * 출력
 * ['지나갔습니다', '00시간 40분', '01시간 33분']
 */
const 버스시간 = ["12:30", "13:20", "14:13"];
const 기준시간 = "12:40";

function solution68(버스시간, 기준시간) {
    let answer = [];
    기준시간 = 기준시간.split(":").map(n => parseInt(n, 10));
    기준시간 = 기준시간[0] * 60 + 기준시간[1];

    for (let i in 버스시간) {
        let time = 버스시간[i].split(":").map(n => parseInt(n, 10));
        time = time[0] * 60 + time[1];

        if (time < 기준시간) {
            answer.push("지나갔습니다");
        } else {
            let 시간 = parseInt((time - 기준시간) / 60, 10);
            let 분 = parseInt((time - 기준시간) % 60, 10);
            answer.push(`${String(시간).padStart(2, 0)}시간${String(분).padStart(2, 0)}분`);
        }
    }
    return answer;
}
console.log(solution68(버스시간, 기준시간));

/**
 * 69. 골드바흐의 추측
 * 
 * 골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과
 * 
 * 위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.
 * 
 * 예)
 * 100 == 47 + 53
 * 56 == 19 + 37
 * 
 * 2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를 작성하세요. 
 * 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.
 */
let prime = [];
let isPrime = true;
let val = 100;
let 골드바흐파티션 = [];

for (let i = 2; i < val; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        prime.push(i);
    }
    isPrime = true;
}

for (let n of prime) {
    if (prime.includes(val - n) && n <= val - n) {
        골드바흐파티션.push([n, val - n]);
    }
}

let 차 = 골드바흐파티션.map(e => (e[1] - e[0]));

console.log(골드바흐파티션);
console.log(차);

console.log(Math.min.apply(null, 차));
console.log(Math.max.apply(null, 차));

let 작은값 = 골드바흐파티션[차.indexOf(Math.min.apply(null, 차))];
let 큰값 = 골드바흐파티션[차.indexOf(Math.max.apply(null, 차))];

console.log(작은값, 큰값);

/**
 * 70. 행렬 곱하기
 * 
 * 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
 * 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.
 * 
 * 입력
 * a = [[1, 2],
 * 		[2, 4]]
 * 
 * b = [[1, 0],
 * 		[0, 3]]
 * 
 * 출력
 * [[1, 6], [2, 12]]
 */
const a70 = [[1, 2],
		    [2, 4]];
const b70 = [[1, 0],
 		    [0, 3]];

function solution70(a, b) {
    const len = a.length;

    if (a[0].length === b.length) {
        // 행렬을 완성시키는 for문
        let result = [];
        for (let i = 0; i < len; i++) {
            // 행을 구하는 for문
            let row = [];
            for (let j = 0; j < len; j++) {
                // 행에 들어가는 원소를 연산하는 for문
                let el = 0;
                for (let k = 0; k < len; k++) {
                    el += a[i][k] + b[k][j];
                }
                row.push(el);
            }
            result.push(row);
        }
        return result;
    } else {
        return -1;
    }
}
console.log(solution70(a70, b70));