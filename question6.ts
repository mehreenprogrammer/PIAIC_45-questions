// Store a person's name with whitespace characters
const person_NameWithWhitespace: string = "\t\n  mehreen  \t\n";

// Print the name with surrounding whitespace
console.log(`Name with whitespace: "${person_NameWithWhitespace}"`);

// Strip the whitespace and print the name
const strippedName: string = person_NameWithWhitespace.trim();
console.log(`Stripped name: "${strippedName}"`);

