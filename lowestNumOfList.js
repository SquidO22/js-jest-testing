const lowestNumOfList = () => {
    const list = [7, 77, 777];
    let looper = 0;
    let lowestNum = list[0];
    while (looper <= list.length - 1){
        if(list[looper] < lowestNum){
            lowestNum = list[looper];
            looper++;
        } else{
            looper++;
        }
    }
    return lowestNum;
}

module.exports = lowestNumOfList