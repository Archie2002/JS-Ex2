let a = [0, 1, 2, 4];
let b = [4, 2, 7, 9, 5, 1];

function union(a, b) {
    s = a.concat(b);
    let s1 = new Set([s]);
    return s1;
}

function intersec(a, b) {
    s = [];
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] == b[j]) s.push(a[i]);
        }
    }
    return s;
}

function diff(a, b) {
    s = [];
    s.push(a);
    s.push(b);
    s.pop(b);
    return s;
}

console.log(union(a, b));
console.log('Intersection: ' + intersec(a, b));
console.log('Difference: ' + diff(a, b));