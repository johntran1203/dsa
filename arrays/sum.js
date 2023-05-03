// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    // i word sort it to be smallest to highest
    const nums = numbers.sort((a,b) => a-b)
    // i word store a number the first
    let result = nums[0] + nums[1]
    // loop through the array and compare
    for(let i=2; i< numbers.length; i++) {
        if(numbers[i] + numbers[i+1] < result) {
            result = numbers[i] + numbers[i+1]
        }
    }
    // if the number is greater than the first number replace it
    // return result 
    return result
  }

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))