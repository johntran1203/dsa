// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


function containsDuplicate(nums) {
    //Create an empty set to store the unique elements of the array(something to store the array)
    const set = new Sset()
    
    // Iterate through each element in the array
    for( const num of nums) {
        //if the set already contains element return ture
        if(set.has(num)) {
            return true
        }
        //Otherwise add the current element to the set
        set.add(num)
    }
    // if the loop completes without finding a duplicate return false
    return false
}

//these are test case 
// Input: nums = [1,2,3,1]
// Output: true


// Input: nums = [1,2,3,4]
// Output: false

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true