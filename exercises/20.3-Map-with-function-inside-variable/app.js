let names = ['Alice', 'Bob', 'Marry', 'Joe', 'Hilary', 'Stevia', 'Dylan'];

let prepender = function(name) {
	return 'My name is: '+name;
};

// Your code here
const newArray = names.map(prepender);
console.log(newArray);




