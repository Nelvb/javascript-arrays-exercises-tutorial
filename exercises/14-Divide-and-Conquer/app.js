let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(listOfNumbers){
    let evens = [];
    let odds = [];
    for (let index = 0; index < listOfNumbers.length; index++) {
         if (listOfNumbers[index] %2 === 0 ){
            evens.push(listOfNumbers[index]);
         }
        else{
            odds.push(listOfNumbers[index]);
        }
    }
    return odds.concat(evens);

}
