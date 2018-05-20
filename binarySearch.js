const binarySearch = (list, item) =>{
    let i = 0;
    let high = list.length - 1;
    while (i <= high) {
        const mid = Math.ceil((i + high) / 2);
        const guess = list[mid];
        if (guess === item) {
            return mid;
        } if (guess > item) {
            high = mid - 1;
        } else 
        i = mid + 1;
    } return null;
};

myList = [1, 3, 5, 7, 9, 11, 13, 21, 37];

console.log(binarySearch(myList, 37)); //8
console.log(binarySearch(myList, -1)); //null
console.log(binarySearch(myList, 5)); //2