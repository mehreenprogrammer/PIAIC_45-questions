
var currentUsers = ['mehreen', 'dua', 'aysha', 'alisha', 'alzaib'];


var newUsers = ['ramanz', 'sharif', 'ashrib', 'ali', 'imran'];




for (let newUser of newUsers) {
  

  const lowercaseNewUser = newUser.toLowerCase();
  const isUnique = !currentUsers.some((currentUser) => currentUser.toLowerCase() === lowercaseNewUser);

  // Print a message based on the result
  
  if (isUnique) {
    console.log(`Username '${newUser}' is available.`);
  } else {
    console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
  }
}
