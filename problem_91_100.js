/**
 * 91. 반평균 등수
 * 
 * 한 반에 30명인 학생, 총 7개의 반 점수가 '국어, 영어, 수학, 사회, 과학' 순서로 있는 다중 리스트를 랜덤 한 값으로 만들어주시고 아래 값을 모두 출력하세요.
 * 
 * 1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요.
 * 2. 반 평균을 구하세요.
 * 3. 반 1등 점수를 구하세요.
 * 4. 전교 평균을 구하세요.
 * 
 * (출력 형식은 상관없습니다.)
 * 
 * //아래 코드는 힌트입니다.
 * 
 * let student_score = [];
 * let class_score = [];
 * let total_score = [];
 * 
 * for (let i=0; i<5; i++){
 *     student_score.push(Math.floor(Math.random()*100)+1);
 * }
 * 
 * console.log(student_score);
 */
let student_score = [];
let class_score = [];
let total_score = [];

for (let k = 0; k < 7; k++) {
    class_score = [];
    for (let j = 0; j < 30; j++) {
        student_score = [];
        for (let i = 0; i < 5; i++){
            student_score.push(Math.floor(Math.random()*100)+1);
        }
        class_score.push(student_score);
    }
    total_score.push(class_score);
}

// console.log(total_score);

let total_average = [];
let c_average = [];
let s_average = 0;
let s_sum = 0;
let c_sum = 0;
let 일등 = 0;

for (let c of total_score) {
    for (let s of c) {
        s_sum = s.reduce((a, b) => a + b, 0);
        s_average = s_sum / 5;
        c_average.push(s_average);
        if (일등 < s_average) {
            일등 = s_average;
        }
    }
    console.log(일등);
    일등 = 0;

    console.log(c_average);
    total_average.push(c_average.reduce((a, b) => a + b, 0) / 30);
    c_average = [];
}
console.log(total_average);
console.log(total_average.reduce((a, b) => a + b, 0) / 7);

/**
 * 92. 키보드 고장
 * 
 * P 회사의 회계를 처리하던 은정은 커피를 마시다가 키보드에 커피를 쏟고 말았습니다.
 * 휴지로 닦고 말려보았지만 숫자 3, 4, 6이 도통 눌리지 않습니다.
 * 10분 뒤, 모든 직원들에게 월급을 입금해 주어야 합니다.
 * 여유 키보드는 없으며, 프로그래밍을 매우 잘하고, 모든 작업을 수작업으로 하고 있습니다.
 * 
 * 이에 눌리지 않는 키보드를 누르지 않고 월급 입금을 두 번에 나눠주고 싶습니다.
 * 
 * 1. 직원은 2000명이며, 3초 이내 수행을 해야합니다.
 * 2. 입력값의 형식은 csv파일형식이며 이과장 '3,000,000', 'S은행', '100-0000-0000-000' 형식으로 주어집니다.
 * 3. 출력값의 형식은 csv파일형식이며 이과장 '1,500,000', '1,500,000', 'S은행', '100-0000-0000-000' 입니다. 또는 '1,000,000', '2,000,000', 'S은행', '100-0000-0000-000' 도 괜찮습니다.
 * 
 * 이대표,'333,356,766','S은행','100-0000-0000-001'
 * 최차장,'5,000,000','S은행','100-0000-0000-002'
 * 이과장,'3,200,000','S은행','100-0000-0000-003'
 * 홍팀장,'3,300,000','S은행','100-0000-0000-004'
 * 이대리,'5,300,000','S은행','100-0000-0000-005'
 */
let 입력값 = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'`;

let 나눠진입력값 = 입력값.split('\n');
let 숫자값 = [];

for (let i of 나눠진입력값) {
    let j = i.split(',');
    let k = j.slice(1, j.length - 2);
    숫자값.push(k.join(''));
}
console.log(숫자값);

let 월급하나 = '';
let 월급둘 = '';
let result = [];
for (let 월급 of 숫자값) {
    for (let 나뉜월급 of 월급) {
        if (나뉜월급 != '\'') {
            if (나뉜월급 == 3) {
                월급하나 += '1';
                월급둘 += '2';
            } else if (나뉜월급 == 4) {
                월급하나 += '2';
                월급둘 += '2';
            } else if (나뉜월급 == 6) {
                월급하나 += '1';
                월급둘 += '5';
            } else {
                월급하나 += 나뉜월급;
                월급둘 += '0';
            }
        }
    }
    // console.log(월급하나);
    // console.log(월급둘);
    result.push([parseInt(월급하나, 10), parseInt(월급둘, 10)]);

    월급하나 = '';
    월급둘 = '';
}
console.log(result);

/**
 * 93. 페이지 교체 - 선입선출 알고리즘
 * 
 * 페이지 교체 알고리즘은 메모리를 관리하는 운영체제에서, 페이지 부재가 발생하여 새로운 페이지를 할당하기 위해 현재 **할당된 페이지 중 어느 것을 교체할지를 결정하는 방법**입니다.
 * 이 알고리즘이 사용되는 시기는 페이지 부재(Page Fault)가 발생해 새로운 페이지를 적재해야 하지만 페이지를 적재할 공간이 없어 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용됩니다. 빈 페이지가 없는 상황에서 메모리에 적재된 페이지와 적재할 페이지를 교체함으로 페이지 부재 문제를 해결할 수 있습니다.
 * [(wikipedia)](https://ko.wikipedia.org/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80_%EA%B5%90%EC%B2%B4_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
 * 
 * 이 중 선입선출(FIFO) 알고리즘은 가장 먼저 들어와서 가장 오래있었던 페이지를 우선으로 교체시키는 방법을 의미합니다. 아래의 그림을 참고해주세요.
 * 
 * 메모리의 크기가 i로 주어지고 들어올 페이지들이 n으로 주어졌을 때, 전체 실행시간을 구해주세요.
 * 
 * 만약 스택 안에 같은 스케줄이 있다면 hit 이라고 하며 실행시간은 1초 입니다. 스택 안에 스케줄이 없다면 miss 라고 하며 실행시간은 6초 입니다.
 * 
 * 예제 1번을 보면 페이지 프레임의 개수는 3개이고 스케줄은 'BCBAEBCE' 입니다. 6번의 miss를 기록하므로 6번 * 6초 = 36초가 되고  2번의 hit을 기록하므로 2번 * 1초 = 2초입니다. 2개를 합한 값이 실행시간이므로, 38초가 됩니다
 */
const f = 3;
const p = 'BCBAEBCE'.split('');

function solution93(frame, page) {
    let runtime = 0;
    let temp = [];

    if (frame === 0) {
        runtime = page.length * 6;
        return runtime;
    }

    for (let i of page) {
        if (temp.includes(i)) {
            runtime += 1;
        } else {
            if (temp.length < frame) {
                temp.push(i);
            } else {
                temp.shift();
                temp.push(i);
            }
            runtime += 6;
        }
    }

    return runtime;
}

console.log(solution93(f, p));

/**
 * 94. 페이지 교체 - LRU 알고리즘
 * 
 * LRU 알고리즘이란 페이지 교체 알고리즘으로써, Least Resently Used의 약자입니다. 즉 페이지 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 페이지를 제거하는 알고리즘입니다.
 * 이 알고리즘의 기본 가설은 가장 오랫동안 이용되지 않은 페이지는 앞으로도 사용할 확률이 적다는 가정하에 페이지 교체가 진행됩니다.
 * 다음 그림을 참고해주세요.
 * 
 * 메모리의 크기가 i로 주어지고 들어올 페이지들이 n으로 주어졌을 때, 전체 실행시간을 구해주세요.
 * 만약 스택 안에 같은 스케줄이 있다면 **hit** 이라고 하며 실행시간은 **1초** 입니다. 스택 안에 스케줄이 없다면 **miss** 라고 하며 실행시간은 **6초** 입니다.
 * 
 * - 예제 1번을 보면 페이지 프레임의 개수는 3개이고 스케줄은 'BCBAEBCE' 입니다. 5번의 miss를 기록하므로 **5번 * 6초 = 30초**가 되고  3번의 hit을 기록하므로 **3번 * 1초 = 3초**입니다. 2개를 합한 값이 실행시간이므로, 33초가 됩니다.
 */
const f94 = 3;
const p94 = 'BCBAEBCE'.split('');

function solution94(frame, page) {
    let runtime = 0;
    let temp = [];

    if (frame === 0) {
        runtime = page.length * 6;
        return runtime;
    }

    for (let i of page) {
        if (temp.includes(i)) {
            runtime += 1;
            temp.splice(temp.indexOf(i), 1);
            temp.push(i);
        } else {
            if (temp.length < frame) {
                temp.push(i);
            } else {
                temp.shift();
                temp.push(i);
            }
            runtime += 6;
        }
    }

    return runtime;
}

console.log(solution94(f94, p94));

/**
 * 95. 도장찍기
 * 
 * 빈 종이에 stamp 모양으로 생긴 도장을 90*k 도로 회전하며 찍습니다. 도장은 N*N 크기이며 각 도장이 찍히는 부분은 1 이상의 자연수와 도장이 찍히지 않는 부분은 0으로 이루어져 있습니다.
 * 
 * 도장의 크기 N과,
 * 종이에 찍힌 도장 횟수를 표현한 stmp 배열과,
 * 얼마만큼 회전할 것인지를 알려주는 회전수 k를 입력받았을 때 각 위치에서 몇 번 도장이 찍혔는지 그 결과값을 출력하세요.
 * 
 * 입력
 * 
 * 도장 = [
 * [1,1,1,2],
 * [2,0,0,0],
 * [1,1,1,1],
 * [0,0,0,0]]
 * 
 * 회전 = 1
 * 
 * 출력
 * 
 * [[1, 2, 3, 3], [2, 1, 0, 1], [1, 2, 1, 2], [0, 1, 0, 2]]
 */
let N = 4;
let stmp = [
    [1,1,1,2],
    [2,0,0,0],
    [1,1,1,1],
    [0,0,0,0]
];
let k = 1;

function solution95(stmp, k) {
    let N = stmp.length;
    let p = [];

    for (let i = 0; i < N; i++) {
        p.push(Array(N).fill(0));
    }

    // 회전시키기 전 최초 1번 도장 찍어주기
    p = sum_matrix(p, stmp);

    for (let i = 0; i < k; i++) {
        stmp = rotate(stmp);
        p = sum_matrix(p, stmp);
    }

    return p;
}

function rotate(stmp) {
    let N = stmp.length;
    let rot = [];

    for (let i = 0; i < N; i++) {
        rot.push(Array(N).fill(0));
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            rot[j][N - 1 - i] = stmp[i][j];
        }
    }

    return rot;
}

function sum_matrix(p, stmp) {
    let N = stmp.length;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            p[i][j] += stmp[i][j];
        }
    }

    return p;
}

console.log(solution95(stmp, k));

/**
 * 96. 넓은 텃밭 만들기!
 * 
 * 수연이는 밭농사를 시작하기로 마음을 먹었다. 집 앞 텃밭을 만들기로 하고 돌들을 제거하고 있는데 매우 큰 바위는 옮기지 못해 고심하고 있다.
 * 
 * 이에 수연이는 다음과 같은 규칙을 정한다.
 * 
 * 1. 바위를(바위는 '1'로 표기한다.) 피해 텃밭을 만들되 정사각형 모양으로 텃밭을 만든다.
 * 2. 텃밭은 가장 넓은 텃밭 1개만 만들고 그 크기를 반환한다.
 * 3. 만든 텃밭은 모두 '#'으로 처리한다.
 * 
 * <입출력 예시>
 * 
 * 입력
 * 
 * 0 0 0 0 0
 * 0 1 0 0 0
 * 0 1 0 0 0
 * 0 0 1 0 0
 * 0 0 0 1 0
 * 
 * 출력
 * 
 * 3 X 3
 * 
 * 0 0 # # #
 * 0 1 # # #
 * 0 1 # # #
 * 0 0 1 0 0
 * 0 0 0 1 0
 * 
 * 입력
 * 
 * 0 0 0 1 0
 * 0 0 0 0 0
 * 0 0 1 0 0
 * 0 0 1 0 0
 * 0 0 0 1 0
 * 
 * 출력
 * 
 * 2 X 2
 * 
 * # # 0 1 0
 * # # 0 0 0
 * 1 0 1 0 0
 * 0 0 1 0 0
 * 1 0 0 1 0
 * 
 * 
 * ***********문제***********
 * const 텃밭 = []; //입력받은 텃밭 리스트
 * let 가꾼텃밭 = []; //텃밭을 가꾼 후 저장된 리스트
 * 
 * // 코드를 작성해주세요
 * 
 * console.log(가꾼텃밭);
 */
let 텃밭 = `0 0 0 0 0
0 1 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0`
.replace(/1/g, '!')
.replace(/0/g, '1')
.replace(/!/g, '0');
console.log(텃밭);

let 역전텃밭 = [];
for (let row of 텃밭.split('\n')) {
    역전텃밭.push(row.split(' '));
}
console.log(역전텃밭);

function solution96(역전텃밭) {
    const 높이 = 역전텃밭.length;
    const 넓이 = 역전텃밭[0].length;
    let max = 0;
    let posX = 0;
    let posY = 0;

    for (let i = 0; i < 높이; i++) {
        for (let j = 0; j < 넓이; j++) {
            역전텃밭[i][j] = parseInt(역전텃밭[i][j], 10);
        }
    }

    for (let i = 1; i < 높이; i++) {
        for (let j = 1; j < 넓이; j++) {
            if (역전텃밭[i][j] === 1) {
                let min;
                // 좌측 원소의 값이 가장 작을 경우
                if (역전텃밭[i - 1][j] >= 역전텃밭[i][j - 1]) {
                    min = 역전텃밭[i][j - 1];
                // 윗측 원소의 값이 가장 작을 경우
                } else if (역전텃밭[i - 1][j] <= 역전텃밭[i][j - 1]) {
                    min = 역전텃밭[i - 1][j];
                }
                // 대각선 원소의 값이 가장 작은 경우
                if (min >= 역전텃밭[i - 1][j - 1]) {
                    min = 역전텃밭[i - 1][j - 1];
                }
                // 현재 기준점이 그릴 수 있는 가장 큰 정사각형의 한번의 길이
                역전텃밭[i][j] = min + 1;

                // 텃밭배열에서 가장 큰 숫자 찾기 
                if (max < 역전텃밭[i][j]) {
                    max = 역전텃밭[i][j];
                    posX = j;
                    posY = i;
                }
            }
        }
    }

    // 밭을 #으로 표시
    for (let i = posY - (max - 1); i < posY + 1; i++) {
        for (let j = posX - (max - 1); j < posX + 1; j++) {
            역전텃밭[i][j] = '#';
        }
    }

    // 숫자를 다시 0과 1로 표기하기
    for (let i = 0; i < 높이; i++) {
        for (let j = 0; j < 넓이; j++) {
            if (역전텃밭[i][j] >= 1) {
                역전텃밭[i][j] = 0;
            } else if (역전텃밭[i][j] === 0) {
                역전텃밭[i][j] = 1;
            }
        }
    }

    for (let i of 역전텃밭) {
        console.log(i);
    }

    // 크기출력
    console.log(`${max} X ${max}`);
}
solution96(역전텃밭);

/**
 * 97. 택배 배달
 * 
 * n 명의 택배 배달원은 쌓인 택배를 배달해야 합니다.
 * 각 택배는 접수된 순서로 배달이 되며 택배마다 거리가 주어집니다. 
 * 거리1당 1의 시간이 걸린다고 가정하였을 때 모든 택배가 배달 완료될 시간을 구하세요.
 * 
 * 1. 모든 택배의 배송 시간 1 이상이며 배달지에 도착하고 돌아오는 왕복 시간입니다.
 * 2. 택배는 물류창고에서 출발합니다.
 * 3. 배달을 완료하면 다시 물류창고로 돌아가 택배를 받습니다.
 * 4. 물류창고로 돌아가 택배를 받으면 배달을 시작합니다.
 * 5. 택배를 상차할 때 시간은 걸리지 않습니다.
 * 
 * 입력은 배달원의 수와 택배를 배달하는 배달 시간이 주어집니다.
 * 
 * ex) 배달원이 3명이고 각 거리가 [1,2,1,3,3,3]인 순서로 들어오는 경우
 * 
 * function solution(n,l){
 * 	//코드 작성
 * }
 * 
 * const 배달원 = 3;
 * const 배달시간 = [1,2,1,3,3,3];
 * 
 * console.log(solution(배달원, 배달시간));
 * // 출력값 = 5
 */
function solution97(n,l){
	let answer = 0;
    let man = new Array(n).fill(0);

    while (l.length !== 0) {
        for (let j = 0; j < man.length; j++) {
            if (man[j] == 0 && l) {
                man[j] += l.shift();
            }
        }

        man = man.map(x => x - 1);

        answer += 1;
    }

    return answer + Math.max.apply(null, man);
}

const 배달원 = 3;
const 배달시간 = [1,2,1,3,3,3];


console.log(solution97(배달원, 배달시간));

/**
 * 98. 청길이의 패션 대회
 * 
 * 패션의 선도주자 청길이는 패션의 발전을 위해 패션쇼를 방문해 유니크한 아이템을 조사하기로 하였습니다.
 * 청길이는 입장하는 사람들의 패션에서 처음 보는 아이템 만을 기록합니다. 
 * 이때 청길이의 기록에서 아래 규칙에 맞게 배열로 출력해 주세요.
 * 
 *     1. 청길이는 각 옷의 종류를 정수로 기록해 놓습니다.
 *          ex) 입력은 "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4" 형태의 문자열입니다.
 *     2. 기록은 청길이가 번호 순서로 유니크한 옷의 번호를 적습니다.
 *     3. 유니크한 옷은 기록된 순서로 추출되고 출력됩니다.
 *          ex) 출력은 [3,1,4,2]입니다.
 * 
 * 입출력예시
 * 
 * 입력
 * "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3"
 * 
 * 출력
 * [4, 2, 3, 1]
 * 
 * 입력
 * "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4"
 * 
 * 출력
 * [3, 1, 4, 2]
 */
let input98 = "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3";
function solution98(input) {
    let answer = [];

    let idx = input.split(/[0-9]번: /g);
    idx.shift();

    for (let i = 0; i < idx.length; i++) {
        idx[i] = idx[i].replace(/ /g, '').split(',');
    }
    console.log(idx);

    for (let i of idx) {
        for (let j of i) {
            if (!answer.includes(j)) {
                answer.push(j);
            }
        }
    }

    answer = answer.map(x => parseInt(x, 10));

    return answer;
}
console.log(solution98(input98));

/**
 * 99. 토끼들의 행진
 * 
 * 토끼들이 징검다리를 건너려고 합니다. 하지만 돌이 부실해서 몇 번 건너지 못할 것 같습니다.
 * 대기 중인 토끼들의 통과 여부를 배열에 담아 출력해 주세요.
 * 
 * 1. 각 돌들이 얼마나 버틸 수 있는지 배열로 주어집니다.
 * 2. 각 토끼가 착지할 때마다 돌의 내구도는 1씩 줄어듭니다.
 *     ex) [1,2,1,4] 각 돌마다 1마리 2마리 1마리 4마리의 착지를 버틸 수 있습니다.
 * 3. 토끼들은 점프력이 각자 다릅니다. 
 *     ex) [2,1] 첫 번째 토끼는 2칸씩, 두 번째 토끼는 1칸씩 점프합니다.
 * 4. 각 토끼들은 순서대로 다리를 건넙니다.
 * 
 * 입력
 * 돌의내구도 = [1, 2, 1, 4]
 * 토끼의점프력 = [2, 1]
 * 
 * 출력
 * ['pass', 'pass']
 * 
 * 입력
 * 돌의내구도 = [1, 2, 1, 4, 5, 2]
 * 토끼의점프력 = [2, 1, 3, 1]
 * 
 * 출력
 * ['pass', 'pass', 'fail', 'fail']
 */
const 돌의내구도 = [1, 2, 1, 4, 5, 2];
const 토끼의점프력 = [2, 1, 3, 1];

function 행진(내구도, 점프력) {
    let answer = [];
    
    for (let i in 점프력) {
        answer.push('pass');
    }

    for (let i in 점프력) {
        let 토끼의현재위치 = 0;

        while (토끼의현재위치 < 내구도.length - 1) {
            토끼의현재위치 += 점프력[i];
            내구도[토끼의현재위치 - 1] -= 1;

            if (내구도[토끼의현재위치 - 1] < 0) {
                answer[i] = 'fail';
            }
        }
    }

    return answer;
}
console.log(행진(돌의내구도, 토끼의점프력));

/**
 * 100. 퍼즐게임
 * 
 * N x M으로 이루어진 아래와 같은 공간에 퍼즐이 쌓여져 있습니다.
 * 퍼즐을 맞추기 위해서는 반드시 맨 오른쪽 줄로 이동시켜 줘야 합니다.
 * 만약 종류가 같은 퍼즐이 연속될 시에 점수가 추가되며 그 퍼즐은 사라집니다.
 * 
 * 점수는 다음과 같습니다.
 * - 파란색 공 : 1점
 * - 빨간색 공 : 2점
 * - 노란색 공 : 3점
 * - 초록색 공 : 4점
 * - 주황색 공 : 5점
 * 점수는 공의 개수만큼 추가됩니다
 * 예를 들어 빨간색 공이 2개 연속되어 없어졌을 경우 2*2 = 4점입니다.
 * 
 * 게임 플레이어는 게임이 시작되면 어떤 퍼즐을 이동할 것인지 모두 작성합니다.
 * 만약 비어있는 곳을 선택하게 된다면 점수가 1점 감소하며 그대로 진행합니다.
 * 위 규칙에 맞는 점수를 리턴하는 함수를 작성하세요.
 * 
 * 예를 들어 입력이 "1 1 1 1 3 3 3"일 경우,
 * 총 점수는 2점으로 2를 출력해야 합니다.
 * 
 * 입력
 * 퍼즐판 = [[0,0,0,0],[0,1,0,3],[2,5,0,1],[2,4,4,1],[5,1,1,1]]
 * 조작 = [1,1,1,1,3,3,3]
 * 
 * 출력
 * 2
 */
let 퍼즐판 = [
    [0,0,0,0],
    [0,1,0,3],
    [2,5,0,1],
    [2,4,4,1],
    [5,1,1,1]
];
let 조작 = [1,1,1,1,3,3,3];

function solution100(plate, moves) {
    let stack = [0];
    let point = 0;

    while (moves.length !== 0) {
        let m = moves.shift();
        for (let i = 0; i < plate.length; i++) {
            if (plate[i][m - 1] !== 0) {
                if (stack[stack.length - 1] == plate[i][m - 1]) {
                    point += plate[i][m - 1] * 2;
                    stack.pop();
                } else {
                    stack.push(plate[i][m - 1]);
                }
                plate[i][m - 1] = 0;
                break;
            } else if (i == plate.length - 1) {
                point -= 1;
            }
        }
    }

    return point;
}
console.log(solution100(퍼즐판, 조작));