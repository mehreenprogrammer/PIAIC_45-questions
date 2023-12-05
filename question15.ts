// Guest List
const guestList: string[] = ["hainya", "hiba", "hareem"];


// Print invitation messages
for (const guest of _guestList) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}

// Change in Guest List
const guest_CantMakeIt: string = "hiba";
const new_Invitee: string = "hunzala";

// Print the guest name who can't make it
console.log(`\nUnfortunately, ${guest_CantMakeIt} can't make it to the dinner.\n`);

// Replace the guest name who can't make it with a new invite
const index_ToRemove: number = _guestList.indexOf(guest_CantMakeIt);
if (index_ToRemove !== -1) {
    _guestList.splice(index_ToRemove, 1, new_Invitee);
}

// Print the updated invitation messages
for (const guest of _guestList) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}