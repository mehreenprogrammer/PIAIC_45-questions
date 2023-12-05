// Define the original guest list
const originalGuestList: string[] = [
    "dua",
    "aysha",
    "mehreen",
  ];
  
  // Function to generate dinner invitations
  function generateInvitations(guests: string[]): string[] {
    return guests.map((guest) => `Dear ${guest}, you are invited to dinner!`);
  }
  
  // Invite guests
  const originalInvitations: string[] = generateInvitations(originalGuestList);
  
  //  original invitations
  originalInvitations.forEach((invitation) => console.log(invitation));
  
  // Simulate a guest not being able to make it
  const guestNotAvailable = "Maya ";
  console.log(`${guestNotAvailable} can't make it to dinner.`);

  const updatedGuestList = originalGuestList.map((guest) =>
    guest === guestNotAvailable ? "Ada" : guest
  );
  
  
  console.log("Good news! We found a bigger dinner table!");
  
  
  updatedGuestList.unshift("Maria");
  

  const middleIndex = Math.floor(updatedGuestList.length / 2);
  updatedGuestList.splice(middleIndex, 0, "Noreen");

  updatedGuestList.push("Ada ");
  
  
  const newInvitations: string[] = generateInvitations(updatedGuestList);
  
  
  newInvitations.forEach((invitation) => console.log(invitation));
  