const nearestTo100 = (a, b) => {
    if(a==b){
        return "Both integers are equal!"
    } else {
        let diffA = Math.abs(100-a);
        let diffB = Math.abs(100-b);

        if(diffA > diffB){
            return b;
        } else {
            return a;
        }
    }
}

console.log(nearestTo100(12,-56));
console.log(nearestTo100(187652,58766));
console.log(nearestTo100(-56,-56));
console.log(nearestTo100(12,12));