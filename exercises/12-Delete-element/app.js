let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
function deletePerson(name){
    return people.filter(function(person){
        return person !== name;
    });
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
