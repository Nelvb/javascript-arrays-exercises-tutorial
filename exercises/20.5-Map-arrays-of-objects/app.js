let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

function calculateAge(birthDate) {
    const today = new Date(); // Obtener la fecha de hoy
    let age = today.getFullYear() - birthDate.getFullYear(); // Calcular la diferencia en años
    const monthDifference = today.getMonth() - birthDate.getMonth(); // Calcular la diferencia en meses
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--; // Si aún no ha pasado el cumpleaños este año, restar un año de la edad
    }
    return age; // Devolver la edad calculada
}

// Paso 3: Función simplifier para crear el mensaje personalizado para cada persona
let simplifier = function(person) {
    let age = calculateAge(person.birthDate); // Calcular la edad de la persona
    return `Hello, my name is ${person.name} and I am ${age} years old`; // Crear el mensaje
};

// Paso 4: Usar map para aplicar la función simplifier a cada elemento del arreglo people
console.log(people.map(simplifier));