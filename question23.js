var Car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(Car === 'subaru');
// Test 2
console.log("Is car != 'toyota'? I predict True.");
console.log(Car !== 'toyota');
// Test 3
console.log("Is car === 'Subaru'? I predict False.");
console.log(Car === 'Subaru');
// Test 4
console.log("Is car !== 'Subaru'? I predict True.");
console.log(Car !== 'Subaru');
// Test 5
var is_JapaneseCar = true;
console.log("Is car == 'subaru' and is Japanese Car is True? I predict True.");
console.log(Car === 'subaru' && is_JapaneseCar);
// Test 6
var has_Sunroof = false;
console.log("Is car == 'subaru' or has Sunroof is True? I predict True.");
console.log(Car === 'subaru' || has_Sunroof);
// Test 7
var is_Sedan = true;
console.log("Is car == 'subaru' and is Sedan is False? I predict False.");
console.log(Car === 'subaru' && !is_Sedan);
// Test 8
var is_Convertible = false;
console.log("Is car != 'subaru' or is Convertible is False? I predict False.");
console.log(Car !== 'subaru' || !is_Convertible);
// Test 9
var is_LuxuryCar = false;
console.log("Is car == 'subaru' or is LuxuryCar is True? I predict True.");
console.log(Car === 'subaru' || is_LuxuryCar);
// Test 10
var is_CompactCar = true;
console.log("Is car != 'subaru' and isCompactCar is False? I predict False.");
console.log(Car !== 'subaru' && !is_CompactCar);
