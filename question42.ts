// showMagicians function
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
 
  function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
  }
  
  // magician names
  const magicianNames: string[] = ["Luminara Shadoweaver", "Merlin the Marvelous", "Ron ", "Zephyr the Illusionist"];
  

  const greatMagicians = makeGreat(magicianNames);
  
  
  showMagicians(greatMagicians);
  