
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
 
  function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
  }
  
  
  const magicianNames: string[] = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
  

  const greatMagicians: string[] = makeGreat([...magicianNames]); 
  
  
  console.log("Original Magicians:");
  showMagicians(magicianNames);
  
  console.log("\nGreat Magicians:");
  showMagicians(greatMagicians);
  