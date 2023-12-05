//storng a person name
var personName = 'mehreen';
//print the name is lowercase
console.log("lowercase:".concat(personName.toLocaleLowerCase()));
//print the name in uppercase
console.log("uppercase:".concat(personName.toLocaleLowerCase()));
//print the name in titlecase
var titleCaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("titlecase:".concat(titleCaseName));
