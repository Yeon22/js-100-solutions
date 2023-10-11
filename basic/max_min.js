/**
 * 최솟값과 최댓값
 */
let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];
a.sort();
console.log(a[0]);
console.log(a[a.length - 1]);
console.log(a);

console.log(Math.max.apply(null, a));
console.log(Math.min.apply(null, a));

let m = a[0];
for (const variable of a) {
    if (variable > m) {
        m = variable;
    }
}
console.log(m);

const reducer = (acc, curr) => acc > curr ? acc : curr;
console.log(a.reduce(reducer));