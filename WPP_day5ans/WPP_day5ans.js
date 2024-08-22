function removeCharacter (string, position) {
    let firstHalf = string.substring(0, position);
    let secondHalf = string.substring(position+1, string.length);
    return (firstHalf+secondHalf)
}

let result = removeCharacter("justSomeRandomStirng", 5);
console.log(result);