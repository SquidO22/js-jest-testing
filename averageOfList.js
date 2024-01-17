const averageOfList = () => {
    const list = [7, 8, 9];
    let looper = 0;
    let average = 0;
    while (looper <= list.length - 1){
        average = average + list[looper];
        looper++;
    }
    average = average/list.length;
    return average;
}

module.exports = averageOfList