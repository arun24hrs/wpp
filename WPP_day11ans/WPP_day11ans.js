const checkMode = (a,b,c) => {
    if((b-a > 0) && (c-b > 0)){
        console.log("Strict Mode");
    } else if(c-a > 0) {
        console.log("Soft Mode")
    } else {
        console.log("Not Increasing!")
    }
}

checkMode(2,4,6);
checkMode(2,1,6);
checkMode(6,4,2);
checkMode(6,1,6);

