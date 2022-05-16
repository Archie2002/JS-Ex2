s = 'This is a sample string';
i1 = 'Insert me';
pos = 3;
s1 = '';
for (i = 0; i < s.length; i++) {
    if (i == pos) s1 = s.slice(0, pos) + i1 + s.slice(pos - 1);
}
console.log(s1);