const generateString = (string) => {
    if(string.length<3){
        return "Enter a string of length 3 or more!"
    } else {
        const suffixPrefix = string.slice(-3);
        const newString  = suffixPrefix+string+suffixPrefix;
        return newString;
    }
}

let result1 = generateString("Internshala");
let result2 = generateString("In");
console.log(result1);
console.log(result2);