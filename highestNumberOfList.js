const highestNumberOfList = () => {
    const list = [4, 5, 6];
    let looper = 0;
    let highestNum = list[0];
    while (looper <= list.length - 1){
        if(list[looper] > highestNum){
            highestNum = list[looper];
            looper++;
        } else{
            looper++;
        }
    }
    return highestNum;
}

module.exports = highestNumberOfList;