function ans() {
    unixTimestamp = 1607518718;
    dateObj = new Date(unixTimestamp * 1000);
    time = dateObj.toUTCString();
    console.log(time)
}

ans()