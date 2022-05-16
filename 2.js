let n = '02544168';
let s = n[0];
for (let i = 1; i < n.length; i++) {
    if(Number.parseInt(n[i-1]) % 2 == 0
     && Number.parseInt(n[i]) % 2 == 0) {
        s += '-';
    }
    s += n[i];
}

console.log(s);