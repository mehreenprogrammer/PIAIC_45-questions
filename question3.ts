//storng a person name
const personName: string = 'mehreen';
//print the name is lowercase
console.log(`lowercase:${personName.toLocaleLowerCase()}`);
//print the name in uppercase
console.log(`uppercase:${personName.toLocaleLowerCase()}`);
//print the name in titlecase
const titleCaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(`titlecase:${titleCaseName}`);


