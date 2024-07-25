let arr = [45,67,87,23,5,32,60];

// Your code here
let invertedArr=[];
for (let index= arr.length-1; index>= 0; index--) {
    invertedArr.push(arr[index]);
    
}

console.log(invertedArr)