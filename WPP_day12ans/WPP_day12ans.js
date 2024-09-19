const reverseString = (string) => {
    let reversedStr = ""
    for(let i=string.length-1; i>=0; i--){
        reversedStr+=string[i];
    }
    return reversedStr;
}

console.log(reverseString("qwerty"))
console.log(reverseString("javascript"))
console.log(reverseString("123456789"))
console.log(reverseString("aaaaaaaa"))