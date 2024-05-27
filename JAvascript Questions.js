// Question # 1
//  Write a function that will take an array as input, sort, and return the array in descending
// order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2]. 



// Solution

function sortDescending(arr) {
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    return arr;
}

// Example usage
const array = [3, 2, 7, 4, 6, 9];
const result = sortDescending(array);
console.log(result);  // Output: [9, 7, 6, 4, 3, 2]




// Question # 2 
// Write a function that will take a string as input, check and return if it is palindrome or
// not. For example, if the string is “madam” the function should return true and if the string
// is “doctor” it should return false

// Solution

function isPalindrome(str) {
    // Normalize the string to lowercase to make the check case-insensitive
    const normalizedStr = str.toLowerCase();
    // Reverse the string
    const reversedStr = normalizedStr.split('').reverse().join('');
    // Check if the normalized string is the same as the reversed string
    return normalizedStr === reversedStr;
}

// Example usage
console.log(isPalindrome('madam'));  // Output: true
console.log(isPalindrome('doctor')); // Output: false




// Question # 3
//  Write a function that will take an array as input and return the sum of the two largest
// numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
// because 11 and 19 are the largest numbers

// Solution
function sumOfTwoLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    // Sort the array in descending order
    arr.sort((a, b) => b - a);

    // Sum the first two elements
    const sum = arr[0] + arr[1];

    return sum;
}

// Example usage
const array1 = [3, 7, 1, 5, 11, 19];
const result1 = sumOfTwoLargest(array1);
console.log(result1);  // Output: 30


// Question # 4

//  Write a function that will take an array as input and return an array with every missing
// element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
// entry is 9, and missing numbers are [0,5,8] 


// Solution

function findMissingNumbers(arr) {
    // Find the highest number in the array
    const maxNum = Math.max(...arr);
    
    // Create a set from the array for efficient lookup
    const numSet = new Set(arr);
    
    // Initialize an empty array to store missing numbers
    const missingNumbers = [];
    
    // Loop from 0 to maxNum and check for missing numbers
    for (let i = 0; i <= maxNum; i++) {
        if (!numSet.has(i)) {
            missingNumbers.push(i);
        }
    }
    
    return missingNumbers;
}

// Example usage
const array2 = [3, 4, 9, 1, 7, 3, 2, 6];
const result2 = findMissingNumbers(array2);
console.log(result2);  // Output: [0, 5, 8]




// Question # 5
// Write a function that will take an array of numbers and return the number most repeated
// in the array with how many times it was repeated. For example, if the array is
// [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times. 



// Solution

function mostRepeatedNumber(arr) {
    // Initialize an object to store the count of each number
    const countMap = {};
    
    // Count the occurrences of each number in the array
    arr.forEach(num => {
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    });
    
    // Find the number with the highest count
    let mostRepeated = arr[0];
    let maxCount = countMap[mostRepeated];
    
    for (const num in countMap) {
        if (countMap[num] > maxCount) {
            mostRepeated = num;
            maxCount = countMap[num];
        }
    }
    
    // Return the result
    return `${mostRepeated} is repeated ${maxCount} times.`;
}

// Example usage
const array5 = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
const result5 = mostRepeatedNumber(array5);
console.log(result5);  // Output: "4 is repeated 5 times."



// Question # 6
// Write a function that will take an array as input, it will rotate the array to the right 1 time
// and return the rotated array. Rotation of the array means that each element is shifted right
// by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]

// Solution


function rotateArrayRight(arr) {
    if (arr.length <= 1) {
        return arr; // No rotation needed for empty array or single element array
    }

    // Remove the last element and store it
    const lastElement = arr.pop();
    
    // Insert the last element at the beginning of the array
    arr.unshift(lastElement);
    
    return arr;
}

// Example usage
const array6 = [3, 8, 9, 7, 6];
const result6 = rotateArrayRight(array6);
console.log(result6);  // Output: [6, 3, 8, 9, 7]

