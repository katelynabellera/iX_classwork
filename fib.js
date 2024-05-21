//print out fib sequence

function fib2(num) {
    if (num == 0) {
        console.log(num)
        return 0;
    }
    else if (num == 1) {
        console.log(num)
        return 1;
    }
    else {
        let result = fib(num-2) + fib(num-1)
        console.log(result)
    }
}


function fib(numOfSequence) {
    let twoBefore;
    let oneBefore;
    let currentNum;
    for (let i = 0; i < numOfSequence; i++) {
        currentNum = i; 
        if (i < 2) {
            console.log(currentNum);
            if (i == 1) {
                twoBefore = 0;
                oneBefore = 1;
            }
        }
        else {
            currentNum = twoBefore + oneBefore
            console.log(currentNum)
            twoBefore = oneBefore
            oneBefore = currentNum
        }
    }
       
}



function area(arr) {
    let side1 = arr[0];
    let side2 = arr[1];
    let side3 = arr[2];
    let semPer = (side1+side2+side3)/2;
    return Math.sqrt(semPer*(semPer-side1)*(semPer-side2)*(semPer-side3));
  }

console.log("Area of triangle with sides 3 8 and 9: " + area([3, 8, 9]))
console.log("First 10 nums of Fib Sequence: ") 
fib(10)