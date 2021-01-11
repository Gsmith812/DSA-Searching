// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the 
// recursive binary search algorithm, identify the sequence of numbers 
// that each recursive call will search to try and find 8.

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the 
// recursive binary search algorithm, identify the sequence of numbers 
// that each recursive call will search to try and find 16.

let arr = [3,5,6,8,11,12,14,15,17,18];
let  counter = 0;

const binarySearch = (array, value, start, end) => {
    counter++;
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if(start > end) {
        return -1;
    }

    const index = Math.floor((start + end)/ 2);
    const item = array[index];

    if(item == value) {
        return index;
    } else if(item < value) {
        return binarySearch(array, value, index + 1, end);
    } else if(item > value) {
        return binarySearch(array, value, start, index - 1);
    }
}

// Drill 1
counter = 0;
binarySearch(arr, 8); // 3


// Drill 2
counter = 0;
binarySearch(arr, 16); // 5