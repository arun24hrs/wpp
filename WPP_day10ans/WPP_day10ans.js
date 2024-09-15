function newStirng(str){
    if(str.length<=3){
        return str.toLowerCase();
    } else {
        let lowerStr = str.substring(0,3).toLowerCase();
        let upperStr = str.substring(3,str.length);
        return lowerStr+upperStr;
    }
}

console.log(newStirng("HelLO"))
console.log(newStirng("WoRLd"))
console.log(newStirng("HI"))
console.log(newStirng("ByE"))