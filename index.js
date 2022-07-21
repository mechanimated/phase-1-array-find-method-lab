function finder(item) {
    return item.result === 'W';
}

const superbowlWin = function(array) {
    let resultWL = array.find(finder)
        if(resultWL) {
            return resultWL.year;
        }
      
}


superbowlWin(sadReality);