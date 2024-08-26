function multipleOf3or7 (num) {
    if(num%7==0 && num%3==0){
        return "Multiple of 3 and 7.";
    } else if (num%7==0) {
        return "Multiple of 7.";
    } else if (num%3==0) {
        return "Multiple of 3.";
    } else {
        return "Not a multiple of 3 or 7."
    }
}

console.log(multipleOf3or7(21));
console.log(multipleOf3or7(9));  
console.log(multipleOf3or7(14)); 
console.log(multipleOf3or7(63));
console.log(multipleOf3or7(1));