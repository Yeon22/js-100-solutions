/**
 * 선택정렬 O(n^2)
 */
{
    let a = [10, 11, 9, 2, 3, 6, 5, 4];
    let 정렬된배열 = [];

    for (let i = 0; i < 8; i++) {
        정렬된배열.push(Math.min.apply(null, a));
        a.splice(a.indexOf(Math.min.apply(null, a)), 1);
        console.log(a);
        console.log(정렬된배열);
    }
}

/**
 * 삽입정렬 O(n^2)
 */
{
    let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
    let 정렬된배열 = [];
    let 배열의길이 = 입력값.length;

    function 삽입값이들어갈인덱스(정렬된배열, 삽입값) {
        for (const i in 정렬된배열) {
            if (삽입값 < 정렬된배열[i]) {
                return i;
            }
        }
        return 정렬된배열.length;
    }

    for (let i = 0; i < 배열의길이; i++) {
        삽입값 = 입력값.shift();
        인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값);
        정렬된배열.splice(인덱스, 0, 삽입값);
        console.log(`인덱스 : ${인덱스}`);
        console.log(`정렬된배열 : ${정렬된배열}`);
    }
}

/**
 * 병합정렬 O(nlogn)
 */
{
    let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

    function 병합정렬(입력배열) {
        let 입력배열의길이 = 입력배열.length;
        let 결과값 = [];
        if (입력배열의길이 <= 1) {
            return 입력배열;
        }

        let 중간값 = parseInt(입력배열의길이 / 2);
        let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
        let 그룹둘 = 병합정렬(입력배열.slice(중간값));

        while (그룹하나.length !== 0 && 그룹둘.length !== 0) {
            if (그룹하나[0] < 그룹둘[0]) {
                결과값.push(그룹하나.shift());
            } else {
                결과값.push(그룹둘.shift());
            }
        }

        while (그룹하나.length !== 0) {
            결과값.push(그룹하나.shift());
        }

        while (그룹둘.length !== 0) {
            결과값.push(그룹둘.shift());
        }

        return 결과값;
    }

    console.log(병합정렬(입력값));
}

/**
 * 퀵정렬 O(nlogn)
 */
{
    let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

    function 퀵정렬(입력배열) {
        let 입력배열의길이 = 입력배열.length;
        if (입력배열의길이 <= 1) {
            return 입력배열;
        }

        let 피벗값 = [입력배열.shift()];
        let 그룹하나 = [];
        let 그룹둘 = [];

        for (const i in 입력배열) {
            if (입력배열[i] < 피벗값) {
                그룹하나.push(입력배열[i]);
            } else {
                그룹둘.push(입력배열[i]);
            }
        }

        console.log(`그룹하나: ${그룹하나}, 피벗값: ${피벗값}, 그룹둘: ${그룹둘}\n`);

        return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
    }

    console.log(퀵정렬(입력값));
}