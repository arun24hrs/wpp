const vowelFinder = (string) => {
    let count = 0;
    for(let i=string.length-1; i>=0; i--){
        if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u"){
            count++;
        } else if(string[i]=="A" || string[i]=="E" || string[i]=="I" || string[i]=="O" || string[i]=="U"){
            count++
        } else {
            continue;
        }
    }
    return count;
}

console.log(vowelFinder("qwErty"))
console.log(vowelFinder("javascrIpt"))
console.log(vowelFinder("123456U789"))
console.log(vowelFinder("aaaAEaaaa"))