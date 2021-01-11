let searchBstFuncs = {
    arr: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],

    linearSearch: function(value) {
        let results = {
            count: 0,
            found: false
        };

        for(let i = 0; i < this.arr.length; i++) {
            results.count = results.count + 1;
            if(this.arr[i] === value) {
                results.found = true;
                return results;
            }
        }
        results.found = 'Matching number not found';
        return results;
    },

    binarySearch: function(value) {
        let results = {
            count: 0,
            found: false
        };

        function recursiveSearch(array, value, start, end) {
            results.count = results.count + 1;
            start = start === undefined ? 0 : start;
            end = end === undefined ? array.length : end;

            if(start > end) {
                results.found = 'Matching number not found';
                return results;
            }

            const index = Math.floor((start + end) / 2);
            const item = array[index];

            if(item === value) {
                results.found = true;
                return results;
            } else if(item < value) {
                return recursiveSearch(array, value, index + 1, end);
            } else if (item > value) {
                return recursiveSearch(array, value, start, index - 1);
            }
        }
        let sortedArr = this.arr.map(i => i).sort((a,b) => a - b);
        return recursiveSearch(sortedArr, value);
    }
}

module.exports = searchBstFuncs;