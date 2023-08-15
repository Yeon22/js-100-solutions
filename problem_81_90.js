/**
 * 81. 지뢰찾기
 * 
 * 지뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. **깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램**을 만드세요.
 * - 아래 Case 외 예외 사항은 고려하지 않습니다.
 * (예를 들어 깃발이 붙어 있을 경우는 고려하지 않습니다.) 
 * 실력이 되시는 분들은 깃발이 붙어있을 상황까지 고려해 주세요.
 * 
 * 데이터
 * let flag = []; //지뢰 없이 깃발만 있는 리스트
 * let minesweeper = []; //지뢰를 찾은 리스트
 * let count = 0;
 * 
 * console.log(flag);
 * console.log(minesweeper);
 * 
 * 입력
 * 0 1 0 0 0
 * 0 0 0 0 0
 * 0 0 0 1 0
 * 0 0 1 0 0
 * 0 0 0 0 0
 * //"0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"
 * 
 * 출력
 * * f * 0 0
 * 0 * 0 * 0
 * 0 0 * f *
 * 0 * f * 0
 * 0 0 * 0 0
 */
let flag = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"; //지뢰 없이 깃발만 있는 리스트
let count = 0;
let sp = flag.split('\n');

for (let i of sp) {
    sp[count] = i.replace('1', 'f').split(' ');
    count += 1;
}

count = 0;
let search = 0;

for (let s of sp) {
    for (let i of s) {
        // console.log(count, search);
        if (i === 'f') {
            // search = s.indexOf(i);
            if (search > 0) {
                s[search - 1] = '*';
            }
            if (search < 4) {
                s[search + 1] = '*';
            }
            if (count > 0) {
                sp[count - 1][search] = '*';
            }
            if (count < 4) {
                sp[count + 1][search] = '*';
            }
        }
        search += 1;
    }
    count += 1;
    search = 0;
}

console.log(flag);
console.log(sp);

/**
 * 82. 수학 괄호 파싱
 * 
 * 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.
 * 
 * 입출력 예시
 * 데이터 입력(1), 프로그램 종료(2) : 1
 * 데이터를 입력하세요: 3 + 5
 * True
 * 
 * 데이터 입력(1), 프로그램 종료(2) : 1
 * 데이터를 입력하세요: 5 + 7) * (3 * 5)
 * False
 * 
 * function math(e){
 * 
 *     //코드를 작성해주세요
 * }
 * 
 * while (1){
 *     let order = prompt('데이터 입력(1), 프로그램 종료(2)');
 *     if (order === 1){
 *         const ex = prompt('데이터를 입력하세요');
 *         console.log(math(ex));
 *     } else {
 *         break;
 *     }
 * }
 * 
 * ----------------------------------------------------------------
 * 
 * 83. 수학 괄호 파싱 2
 * 
 * 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다.
 * 괄호는 소괄호와 중괄호가 있습니다.
 * 
 * 입출력 예시
 * 데이터 입력(1), 프로그램 종료(2) : 1
 * 데이터를 입력하세요: 5 + 7 * {(3 * 5)}
 * True
 * 
 * 데이터 입력(1), 프로그램 종료(2) : 1
 * 데이터를 입력하세요: 5 + 7){ * (3 * 5)
 * False
 * 
 * 데이터 입력(1), 프로그램 종료(2) : 2
 * 
 * while (1){
 *     let order = prompt('데이터 입력(1), 프로그램 종료(2)');
 *     if (order === 1){
 *         const ex = prompt('데이터를 입력하세요');
 *         console.log(math(ex));
 *     } else {
 *         break;
 *     }
 * }
 */
let user_input = "{()}}";

function solution(s) {
    const m = {
        ')': '(',
        '}': '{',
    };
    let stack = [];

    for (let i in s) {
        if (s[i] === '(' || s[i] === '{') {
            stack.push(s[i]);
        } else if (m[s[i]]) {
            // console.log(m[s[i]]);
            if (stack.length === 0) {
                return false;
            } else {
                const t = m[s[i]];
                if (t !== stack.pop()) {
                    return false;
                }
            }
        }
    }
    // console.log(stack);
    return stack.length === 0;
}

console.log(solution(user_input));

/**
 * 84. 숫자뽑기
 * 
 * 소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다. 
 * 예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
 * 이 중 가장 큰 수는 73입니다.
 * 
 * 위 예시처럼 어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수를 찾아 주세요.
 */
function solution84(chars, length) {
    let result = [];

    const f = (pre, chs) => {
        for (let i = 0; i < chs.length; i++) {
            result.push(pre + chs[i]);

            f(pre + chs[i], chs.slice(i + 1));
        }
    }
    f('', chars);
    console.log(result);

    result = result.filter(x => x.length === length);
    console.log(result);

    result.sort((a, b) => b - a);

    return result[0];
}

const num = "1723";
const len = 2;
console.log(solution84(num, len));

/**
 * 85. 숫자놀이
 * 
 * 일정한 규칙을 가지고 있는 숫자를 나열하는 놀이를 하는 중입니다.
 * 이전 숫자에서 각 숫자의 개수를 나타내어 숫자로 만들고 다시 그 숫자를 같은 규칙으로 만들며 나열합니다.
 * 이 놀이는 1부터 시작합니다.
 * 다음 수는 1이 1개이기 때문에 '11'이 되고,
 *  '11'에서 1이 2개이기 때문에 그다음은 '12'가 됩니다.
 * 
 * 즉,
 * 1. 1  → (1)
 * 2. 11 → (1이 1개)
 * 3. 12 → (1이 2개)
 * 4. 1121 → (1이 1개 2가 1개)
 * 5. 1321 → (1이 3개 2가 1개)
 * 6. 122131 → (1이 2개 2가 1개 3이 1개)
 * 7. 132231 → (1이 3개 2가 2개 3이 1개)
 * 
 * 위와 같이 진행되는 규칙을 통해 진행 횟수 N을 입력받으면 해당되는 수를 출력하세요.
 * 
 * 입력
 * 6
 * 
 * 출력
 * 122131
 */
function solution85(n) {
    let answer = '1';
    if (n === 1) {
        return 1;
    }

    for (let i = 1; i < n; i++) {
        answer = rule(answer);
    }

    return answer;
}

function rule(answer) {
    let answerMax = 9;
    let result = '';

    for (let i = 1; i < answerMax; i++) {
        let re = new RegExp(i, 'g');
        let count = (answer.match(re) || []).length;

        if (count >= 1) {
            result += String(i) + String(count);
        }
    }

    return result;
}

const user_input85 = 6;
console.log(solution85(user_input85));

/**
 * 86. 회전 초밥
 * 
 * 쉔은 회전 초밥집에 갔습니다.
 * 초밥집에 간 쉔은 각 초밥에 점수를 매기고 낮은 점수의 순서로 초밥을 먹으려 합니다.
 * 이때 n위치에 놓여진 초밥을 먹고자 할 때 접시가 몇 번 지나가고 먹을 수 있을지 출력하세요.
 * 
 * 1. 초밥은 놓여진 위치에서 옮겨지지 않습니다.
 * 2. 지나간 초밥은 나머지 초밥이 지나간 후에 다시 돌아옵니다.
 * 3. 초밥은 1개 이상 존재합니다.
 * 
 * 예)
 * A, B, C, D, E 초밥이 있고 각 점수가 1, 1, 3, 2, 5 일 때 3번째(C초밥)을 먹게 되는 순서는
 * 점수가 1인 초밥 A와 B를 먹고 다음으로 점수가 2인 D 초밥을 먹어야 됩니다.
 * A B C D E 의 순서로 접시가 도착하지만 C가 도착했을때 먹지 못하는 상황이 옵니다.
 * 2점을 주었던 D를 먼저 먹어야 C를 먹을 수 있습니다. 
 * 즉, A B C D E C 의 순서로, 접시가 5번 지나가고 먹게 된다.
 * 
 * 입력
 * point = [1,1,3,2,5]
 * dish = 3
 * 
 * 출력
 * 5
 * 
 * 입력
 * point = [5,2,3,1,2,5]
 * dish = 1
 * 
 * 출력
 * 10
 * 
 * //point 각 접시별 점수가 들어있는 배열
 * //dish 먹고자하는 접시의 위치
 */
const point = [1, 1, 3, 2, 5];
const dish = 3;

function solution86(pnt, d) {
    let answer = 0;
    d -= 1; // 배열은 0부터 시작하므로

    let s = pnt.slice();
    s.sort((a, b) => a - b);
    // console.log(s);

    while (true) {
        let p = pnt.shift();

        if (s[0] === p) {
            if (d === 0) {
                break;
            }
            d -= 1;
            s.shift();
        } else {
            pnt.push(p);
            if (d === 0) {
                d = pnt.length - 1;
            } else {
                d -= 1;
            }
        }
        answer += 1;
    }

    return answer;
}

console.log(solution86(point, dish));

/**
 * 87. 천하제일 먹기 대회
 * 
 * 천하제일 먹기 대회가 개최되었습니다.
 * 이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다. 
 * 
 * 1. 같은 이름의 선수는 없습니다.
 * 2. 접시의 수가 같은 경우는 없습니다.
 * 
 * 입력 예1)
 * 손오공 야모챠 메지터 비콜로
 * 70 10 55 40
 * 
 * 출력 예1)
 * {'손오공': 1, '메지터': 2, '비콜로': 3, '야모챠': 4}
 * 
 * 입력 예2)
 * ["홍길동","엄석대","연개소문","김첨지"]
 * [2, 1, 10, 0]
 * 
 * 출력 예2)
 * {'연개소문': 1, '홍길동': 2, '엄석대': 3, '김첨지': 4}
 */
const name = '손오공 야모챠 메지터 비콜로'.split(' ');
const point87 = '70 10 55 40'.split(' ');
const point87_int = point87.map(x => parseInt(x, 10));

function solution87(n, pnt) {
    let temp = [];
    for (let i of n) {
        let obj = {};
        obj['name'] = i;
        obj['value'] = pnt[n.indexOf(i)];
        temp.push(obj);
    }
    // console.log(temp);

    temp.sort((a, b) => a.value < b.value ? 1 : a.value > b.value ? -1 : 0);
    console.log(temp);

    let result = {};
    for (let i of temp) {
        result[i['name']] = temp.indexOf(i) + 1;
    }
    return result;
}

console.log(solution87(name, point87_int));

/**
 * 88. 지식이의 게임 개발
 * 
 * 지식이는 게임을 만드는 것을 좋아합니다. 하지만 매번 다른 크기의 지도와 장애물을 배치하는데 불편함을 겪고 있습니다. 이런 불편함을 해결하기 위해 지도의 크기와 장애물의 위치, 캐릭터의 위치만 입력하면 게임 지형을 완성해 주는 프로그램을 만들고 싶습니다.  지식이를 위해 게임 지형을 만드는 프로그램을 작성해 주세요.
 * 
 * - 가로(n), 세로(m)의 크기가 주어집니다.
 * - 지형의 테두리는 벽으로 이루어져 있습니다.
 * - 캐릭터가 있는 좌표가 배열 형태로 주어집니다.
 * - 장애물이 있는 좌표가 2차원 배열 형태로 주어집니다.
 * 
 * 지도는 n x m 크기의 배열이며 배열 안의 값은
 *    -움직일 수 있는 공간(0)
 *    -캐릭터(1)
 *    -벽(2)
 * 3개로 구분되어 있습니다.
 * 
 * 입출력예시
 * 
 * 입력
 * 가로 = 4
 * 세로 = 5
 * 캐릭터위치 = [0,0]
 * 장애물 = [[0,1],[1,1],[2,3],[1,3]]
 * 
 * make_map(가로, 세로, 캐릭터위치, 장애물)
 * 
 * 출력
 * [2, 2, 2, 2, 2, 2]
 * [2, 1, 2, 0, 0, 2]
 * [2, 0, 2, 0, 2, 2]
 * [2, 0, 0, 0, 2, 2]
 * [2, 0, 0, 0, 0, 2]
 * [2, 0, 0, 0, 0, 2]
 * [2, 2, 2, 2, 2, 2]
 */
function make_map(가로, 세로, 캐릭터, 장애물) {
    let world_map = [];

    for (let i = 0; i < 세로 + 2; i++) {
        world_map.push(Array(가로 + 2).fill(0));
    }
    
    for (let i in world_map) {
        for (let j in world_map[0]) {
            // 지형의 테두리에 벽 표시
            if (i == 0 || j == 0 || j == world_map[0].length - 1 || i == world_map.length - 1) {
                world_map[i][j] = 2;
            }
        }
    }
    world_map[캐릭터[0] + 1][캐릭터[1] + 1] = 1;

    for (let i of 장애물) {
        // 캐릭터가 서있다면?
        if (world_map[i[0] + 1][i[1] + 1] == 1) {
            // 캐릭터는 그대로 둔다
            world_map[i[0] + 1][i[1] + 1] = 1;
        } else {
            // 아니면 장애물로 바꿔준다
            world_map[i[0] + 1][i[1] + 1] = 2;
        }
    }
    // console.log(world_map);

    for (let i of world_map) {
        console.log(i);
    }
    
}

make_map(4, 5, [0, 0], [[0,1],[1,1],[2,3],[1,3]]);

/**
 * 89. 지식이의 게임 개발 2
 * 
 * (연계형 문제 - 88번을 먼저 풀고 오셔야 합니다!)
 * 제코베의 도움을 받아 성공적으로 지도를 만들어낸 지식이는 캐릭터의 움직임을 구현했습니다. 
 * 하지만 지도 위의 캐릭터 위치를 나타내는데 문제가 발생했습니다.
 * 지식이는 지도 위에서 캐릭터의 위치를 나타내기 위해 다시 한번 제코베에 도움을 요청합니다.
 * 
 * 지도 위에서 캐릭터의 위치를 나타내주세요
 * 
 * 1. 지도는 88번 문제의 해답을 사용해 주세요
 * 2. 입력값은 지도, 캐릭터의 움직임입니다.
 * 3. 캐릭터의 움직임은 { 상:1, 하:2, 좌:3, 우:4 }로 정수로 이루어진 배열이 들어갑니다.
 * 4. 벽과 장애물은 통과할 수 없습니다. 
 * 5. 마지막 캐릭터의 위치를 반영한 지도를 보여주고 위치를 반환하는 함수를 작성해 주세요.
 * 
 * 데이터
 * 가로 = 4
 * 세로 = 5
 * 캐릭터위치 = [0, 0]
 * 장애물 = [[0,1],[1,1],[2,3],[1,3]]
 * console.log('캐릭터 이동 전 지도')
 * 지도 = make_map(가로, 세로, 캐릭터위치, 장애물)
 * 
 * 움직임 = [2,2,2,4,4,4]
 * console.log('캐릭터 이동 후 지도')
 * 캐릭터 위치 = move(지도, 움직임)
 * 
 * 출력
 * 캐릭터 이동 전 지도
 * [2, 2, 2, 2, 2, 2]
 * [2, 1, 2, 0, 0, 2]
 * [2, 0, 2, 0, 2, 2]
 * [2, 0, 0, 0, 2, 2]
 * [2, 0, 0, 0, 0, 2]
 * [2, 0, 0, 0, 0, 2]
 * [2, 2, 2, 2, 2, 2]
 * 
 * 캐릭터 이동 후 지도
 * [2, 2, 2, 2, 2, 2]
 * [2, 0, 2, 0, 0, 2]
 * [2, 0, 2, 0, 2, 2]
 * [2, 0, 0, 0, 2, 2]
 * [2, 0, 0, 0, 1, 2]
 * [2, 0, 0, 0, 0, 2]
 * [2, 2, 2, 2, 2, 2]
 * 캐릭터위치 : [4, 4]
 */
function make_map89(가로, 세로, 캐릭터, 장애물, 움직임) {
    let world_map = [];

    for (let i = 0; i < 세로 + 2; i++) {
        world_map.push(Array(가로 + 2).fill(0));
    }
    
    for (let i in world_map) {
        for (let j in world_map[0]) {
            // 지형의 테두리에 벽 표시
            if (i == 0 || j == 0 || j == world_map[0].length - 1 || i == world_map.length - 1) {
                world_map[i][j] = 2;
            }
        }
    }
    world_map[캐릭터[0] + 1][캐릭터[1] + 1] = 1;

    for (let i of 장애물) {
        // 캐릭터가 서있다면?
        if (world_map[i[0] + 1][i[1] + 1] == 1) {
            // 캐릭터는 그대로 둔다
            world_map[i[0] + 1][i[1] + 1] = 1;
        } else {
            // 아니면 장애물로 바꿔준다
            world_map[i[0] + 1][i[1] + 1] = 2;
        }
    }
    
    console.log("캐릭터 이동 전 지도");
    for (let i of world_map) {
        console.log(i);
    }
    
    let 캐릭터의위치 = [캐릭터[0] + 1, 캐릭터[1] + 1];
    let x = 캐릭터의위치[1];
    let y = 캐릭터의위치[0];

    world_map[y][x] = 0;
    
    for (let i of 움직임) {
        if (i == 1 && world_map[y - 1][x] != 2) {
            y -= 1;
        } else if (i == 2 && world_map[y + 1][x] != 2) {
            y += 1;
        } else if (i == 3 && world_map[y][x - 1] != 2) {
            x -= 1;
        } else if (i == 4 && world_map[y][x + 1] != 2) {
            x += 1;
        }
    }

    world_map[y][x] = 1;
    console.log("캐릭터 위치: ", [x, y]);

    console.log("캐릭터 이동 후 지도");
    for (let i of world_map) {
        console.log(i);
    }
}

make_map89(4, 5, [0, 0], [[0,1],[1,1],[2,3],[1,3]], [2,2,2,4,4,4]);

/**
 * 90. 같은 의약 성분을 찾아라!
 * 
 * 의약품 성분이 총 8개인 약품들이 있습니다. 예를 들어 다음 데이터는 총 8개의 성분을 갖습니다.
 * 
 * 판콜비 = 'ABCDEFGH'
 * 넥타이레놀 = 'EFGHIJKL'
 * 
 * 특정 약품 A의 성분이 공개되었을 때, 이와 유사한 성분을 가진 데이터들의 출력을 구하는 문제입니다.
 * 
 * 입력 : 'ABCDEFGH' 4
 * 데이터 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 1만 개의 데이터
 * 출력 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 4개의 요소가 같은 약품 전부(4개 이상이 아니며 같은 요소가 4개인 것을 출력해야 합니다.)
 * 
 * * 해당 문제는 시간제한이 있습니다.
 * * 제약 데이터의 성분은 중복이 될 수 없습니다.
 * (예를 들어 'AAABBBAB'와 같은 데이터는 없습니다.)
 */
let l = [];

for (let i = 65; i < 91; i++) {
    l.push(String.fromCharCode((i)));
}

console.log(l);

function randomItem(a) {
    let string = [];

    while (string.length !== 8) {
        let b = a[Math.floor(Math.random() * a.length)];
        if (!string.includes(b)) {
            string.push(b);
        }
    }

    let medicine = string.join('');
    return medicine;
}

console.log(randomItem(l));

let total_medicine = [];

while (total_medicine.length !== 100) {
    let m = randomItem(l);
    if (!total_medicine.includes(m)) {
        total_medicine.push(m);
    }
}

console.log(total_medicine);

let user_input90 = "ABCDEFGH 4".split(' ');
let result = [];

for (let i of total_medicine) {
    let setUserData = new Set(user_input90[0]);
    let setMedicine = new Set(i);

    // 교집합
    let intersection = new Set([...setUserData].filter(x => setMedicine.has(x)));

    if (intersection.size === parseInt(user_input90[1], 10)) {
        result.push(i);
    }
}

console.log(result);
console.log(result.length);