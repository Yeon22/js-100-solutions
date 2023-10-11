/**
 * 1부터 100까지의 합과 곱
 */
{
    // 합 반복문 O(n)
    let s = 0;
    for (let i = 1; i < 101; i++) {
        s += i;
    }
    console.log(s);
    
    // 합 재귀함수
    function f(n) {
        if (n <= 1) {
            return 1;
        }
    
        return n + f(n - 1);
    }
    console.log(f(100));
    
    // 곱 반복문 O(n)
    let m = 1;
    for (let j = 1; j < 101; j++) {
        m *= j;
    }
    console.log(m);

    // 시그마 공식 O(1)
    let n = 100;
    console.log(n * (n + 1) / 2);
}

/**
 * 2진수 변환
 */
{
    // 반복문
    let result = '';
    let x = 11;
    while (true) {
        if (x % 2 == 0) {
            result += '0';
        } else {
            result += '1';
        }
        
        x = Math.floor(x / 2);

        if (x == 1 || x == 0) {
            result += String(x);
            break;
        }
    }
    console.log(result.split('').reverse().join(''));

    // 재귀함수
    function 이진법(숫자) {
        if (숫자 == 1 || 숫자 == 0) {
            return String(숫자);
        }

        return 이진법(Math.floor(숫자 / 2)) + String(숫자 % 2);
    }
    console.log(이진법(11));
}

/**
 * 문자열 뒤집기
 */
{
    // 반복문
    let result = '';
    let x = 'leehojun';
    while (true) {
        if (x.length == 1) {
            result += x;
            break;
        } 

        let y = x.split('');
        result += String(y.pop());
        x = y.join('');
    }
    console.log(result);

    // 재귀함수
    function 문자열역순(문자) {
        if (문자.length == 1) {
            return 문자;
        }

        return 문자[문자.length - 1] + 문자열역순(문자.slice(0, 문자.length - 1));
    }
    console.log(문자열역순('leehojun'));
}

/**
 * 각 자릿수의 합
 */
{
    // 반복문
    let result = 0;
    let x = '123123';
    while (true) {
        if (x.length == 1) {
            result += parseInt(x, 10);
            break;
        } 

        let y = x.split('');
        result += parseInt(y.pop(), 10);
        x = y.join('');
    }
    console.log(result);

    // 재귀함수
    function 자릿수더하기(문자) {
        if (문자.length == 1) {
            return parseInt(문자, 10);
        }

        return parseInt(문자[문자.length - 1], 10) + 자릿수더하기(문자.slice(0, 문자.length - 1));
    }
    console.log(자릿수더하기('123123'));
}

/**
 * 피보나치 수열
 */
{
    // 반복문
    let a = 1;
    let b = 1;
    for (let i = 0; i < 5; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    console.log(b);

    // 재귀함수
    function 피보나치(숫자) {
        if (숫자 == 1 || 숫자 == 2) {
            return 1;
        }

        return 피보나치(숫자 - 1) + 피보나치(숫자 - 2);
    }
    console.log(피보나치(7));
}