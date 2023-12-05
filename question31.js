var usernames = ['mehreen', 'dua', 'aysha', 'alzaib', 'alisha'];
if (usernames.length > 0) {
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to grow our user base.");
}
