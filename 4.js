function ans(arr) {
    for (i = 1; i <= arr.length-1; i++) {
        let j = Math.floor(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function show() {
    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var arr1 = ans(arr);
    console.log('After shuffling: ', arr1);
}
show();