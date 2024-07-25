let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let emptyArray = [];



for (let index = 0; index < mix.length; index++) {
    let dataType = typeof mix[index];
    emptyArray.push(dataType);

}
console.log(emptyArray);