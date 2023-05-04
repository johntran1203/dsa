// if it is not 0 then it is not a power of 2
//

function isPowerOfTwo(n) {
    if (n <1) {
        return false
    }
    while(n>1) {
        if(n %2 !==0) {
            return false
        }
       n= n/2
    }
    return true
}

console.log(isPowerOfTwo(1)) //true
console.log(isPowerOfTwo(2)) //true
console.log(isPowerOfTwo(5)) //false
