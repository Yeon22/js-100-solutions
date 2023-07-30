/**
 * 31. 자바스크립트 자료형의 복잡도
 * 
 * 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.
 * 
 * 1)  arr[i]
 * 2)  arr.push(5)
 * 3)  arr.slice()
 * 4)  arr.pop()
 * 5)  arr.includes(5)
 */
console.log(3, 5);

/**
 * 32. 문자열 만들기
 * 
 * 취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다. 
 * 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.
 * 
 * 입출력
 * 
 * 입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
 * 출력 : 5
 */
const words = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";
console.log(words.split(' ').length);

/**
 * 33. 거꾸로 출력하기
 * 
 * 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
 * 
 * 입출력
 * 
 * 입력 : 1 2 3 4 5
 * 출력 : 5 4 3 2 1
 * 
 * 입력 : 2 4 6 7 8
 * 출력 : 8 7 6 4 2
 */
const arr = prompt("숫자를 공백을 구분자로 하여 입력하세요.").split(' ').reverse();
let reverseValue = '';

for (let i = 0; i < arr.length; i++) {
    reverseValue += arr[i] + ' ';
}
console.log(reverseValue);

/**
 * 34. sort 구현하기
 * 
 * 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 
 * 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
 * (키는 공백으로 구분하여 입력됩니다.)
 * 
 * 입출력
 * 
 * 입력 : 176 156 155 165 166 169
 * 출력 : NO
 * 
 * 입력 : 155 156 165 166 169 176
 * 출력 : YES
 */
const unsorted = prompt("키를 공백을 구분자로 하여 입력하세요.");
let sorted = "";

sorted = (unsorted.split(" ").sort(function(a, b) {
    return a - b;
})).join(" ");
console.log(sorted);

if (unsorted === sorted) {
    console.log("YES");
} else {
    console.log('NO');
}

/**
 * 35. Factory 함수 사용하기
 * 
 * 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 
 * <pass>에 코드를 작성하여 two함수를 완성하세요.
 * 
 * function one(n){
 *      function two(){
 *          //pass
 *      }
 *      return two;
 * }
 * 
 * const a = one(2);
 * const b = one(3);
 * const c = one(4);
 * 
 * console.log(a(10));
 * console.log(b(10));
 * console.log(c(10));
 */
function one(n){
    function two(x){
        return Math.pow(x, n);
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

/**
 * 36. 구구단 출력하기
 * 
 * 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.
 * 
 * 입출력
 * 
 * 입력 : 2
 * 출력 : 2 4 6 8 10 12 14 16 18
 */
const num = prompt("1~9까지의 숫자 중 하나만 입력하세요.");
let result36 = '';

for (let i = 0; i < 9; i++) {
    result36 += num * (i + 1) + " ";
}

console.log(result36);

/**
 * 37. 반장 선거 
 * 
 * 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.
 * 
 * 입력
 * 원범 원범 혜원 혜원 혜원 혜원 유진 유진
 * 
 * 출력
 * 혜원(이)가 총 4표로 반장이 되었습니다.
 */
const array = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let result37 = {};
let winner = "";

for (let index in array) {
    let val = array[index];
    result37[val] = result37[val] === undefined ? 1 : result37[val] + 1;
}

winner = Object.keys(result37).reduce(function(a, b) {
    return result37[a] > result37[b] ? a : b;
});

console.log(winner);
console.log(`${winner}(이)가 총 ${result37[winner]}표로 반장이 되었습니다.`);

/**
 * 38. 호준이의 아르바이트
 * 
 * 호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.
 * 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
 * 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.
 * 
 * 입출력
 * 
 * 입력 : 97 86 75 66 55 97 85 97 97 95
 * 출력 : 6
 */
const scores = ["97", "86", "75", "66", "55", "97", "85", "97", "97", "95"];
scores.sort(function (a, b) {
    return a - b;
});
console.log(scores);

let top3 = [];
let count38 = 0;

while (top3.length < 4) {
    let value = scores.pop();

    if (!top3.includes(value)) {
        top3.push(value);
    }

    count38++;
}

console.log(top3);
console.log(count38 - 1);

/**
 * 39. 오타 수정하기
 * 
 * 혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다. 
 * 그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다. 
 * 혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.
 * 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.
 * 
 * 입출력
 * 
 * 입력 : querty
 * 출력 : euerty
 * 
 * 입력 : hqllo my namq is hyqwon
 * 출력 : hello my name is hyewon
 */
const word = "hqllo my namq is hyqwon";
console.log(word.split('q').join('e'));

/**
 * 40. 놀이동산에 가자
 * 
 * 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 
 * 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.
 * 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
 * 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.
 * 
 * 입력
 * 50
 * 5
 * 20
 * 20
 * 20
 * 20
 * 20
 * 
 * 출력
 * 2
 */
const weightLimit = prompt("무게제한을 입력해주세요.");
const memberCount = prompt("몇명이 탈 계획인가요?");
let count40 = 0;
let totalWeight = 0;

for (let i = 0; i < memberCount; i++) {
    totalWeight += parseInt(prompt("몸무게를 입력해주세요."), 10);
    if (totalWeight <= weightLimit) {
        count++;
    }
}
console.log(count40);