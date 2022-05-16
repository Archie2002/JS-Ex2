let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
i = 3;
let a1 = [];
let a2 = [];
let j = 1;
while (j <= i) {
    a1.push(a.shift());
    a2.push(a.pop());
    j++;
}
console.log(a1);
console.log(a2);