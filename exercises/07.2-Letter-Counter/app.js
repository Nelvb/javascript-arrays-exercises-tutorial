let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for (let index = 0; index < par.length; index++) {
    const letter = par[index].toLowerCase(); 
        if(letter !== ' ') {
            if (counts[letter]) {counts[letter]++;
                
            }else {
                counts[letter] = 1;
         }
    }
    }

console.log(counts);
