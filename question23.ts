let Car: string = 'subaru';

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
let isJapaneseCar: boolean = true;
console.log("Is car == 'subaru' and is Japanese Car is True? I predict True.");
console.log(Car === 'subaru' && isJapaneseCar);

// Test 6
let hasSunroof: boolean = false;
console.log("Is car == 'subaru' or has Sunroof is True? I predict True.");
console.log(Car === 'subaru' || hasSunroof);

// Test 7
let isSedan: boolean = true;
console.log("Is car == 'subaru' and is Sedan is False? I predict False.");
console.log(Car === 'subaru' && !isSedan);

// Test 8
let isConvertible: boolean = false;
console.log("Is car != 'subaru' or is Convertible is False? I predict False.");
console.log(Car !== 'subaru' || !isConvertible);

// Test 9
let isLuxuryCar: boolean = false;
console.log("Is car == 'subaru' or is LuxuryCar is True? I predict True.");
console.log(Car === 'subaru' || isLuxuryCar);

// Test 10
let is_CompactCar: boolean = true;
console.log("Is car != 'subaru' and isCompactCar is False? I predict False.");
console.log(Car !== 'subaru' && !is_CompactCar);
