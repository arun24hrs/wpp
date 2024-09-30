const half = (str) => {
    if(str.length%2==0){
        let mid = str.length/2;
        let halfStr = str.slice(0,mid);
        return halfStr;
    } else {
        return "Stirng is not even."
    }

}

console.log(half("qwerty"));
console.log(half("qwertyy"));