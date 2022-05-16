let arr = [0, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9];
let freq = new Map();
let ans, mx = 0;
arr.forEach(item => {
    if(freq.has(item) == false) freq.set(item, 0);

    freq.set(item, freq.get(item)+1);

    if(freq.get(item) > mx) {
        mx = freq.get(item);
        ans = item;
    }
});
console.log(ans);
