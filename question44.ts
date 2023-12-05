
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
      console.log("You ordered an empty sandwich.");
    } else {
      console.log("Items: " + items.join(", "));
      console.log("Enjoy your sandwich!");
    }
    console.log(); 
  }
  

  orderSandwich("Savory Stack-Up", "BBQ Brisket Bliss:", "Lettuce", "Tomato");
  orderSandwich("Veggie Delight Wrap:", "cream cheese", "Mayo");
  orderSandwich();
  