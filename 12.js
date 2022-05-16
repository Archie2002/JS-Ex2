l = 2;
s = 'RapidOpsSolution';

function ans(s) {
    i = 0;
    s1 = [];
    for (i = 0; i < s.length; i++) {
        if (i % 2 == 0) s1 = s1 + s.substr(i, l) + ' ';
    }
    return s1;
}

aa = ans(s);

console.log(aa.split(' '));

// Ra pi dO ps So lu ti on