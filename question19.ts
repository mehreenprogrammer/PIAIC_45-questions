
const OriginalGuestList: string[] = [
    "aysha",
    "dua",
    "mehreen",
  ];
  function GenerateInvitations(guests: string[]): string[] {
    return guests.map((guest) => `Dear ${guest}, you are invited to dinner!`);
  }
  
  
  const originalInvitations: string[] = generateInvitations(originalGuestList);
  
  
  originalInvitations.forEach((invitation) => console.log(invitation));
  
  
  console.log(`We are inviting ${originalGuestList.length} people to dinner.`);
  