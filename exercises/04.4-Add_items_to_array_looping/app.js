let arr = [4, 5, 734, 43, 45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
for (let index = 0; index < 10; index++) {
    let number = Math.floor(Math.random() * 1000);

    arr.push(number)
    
}
console.log(arr);