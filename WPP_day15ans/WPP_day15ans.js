const sumOfThreeElements = (arr) => {
    if(arr.length!==3){
        return "Array length should be 3."
    } else {
        let sum = arr[0]+arr[1]+arr[2];
        return sum;
    }
}

console.log(sumOfThreeElements([1,2,3]))
console.log(sumOfThreeElements([1,2,3,4]))
console.log(sumOfThreeElements([2,3]))
console.log(sumOfThreeElements([10,20,30]))