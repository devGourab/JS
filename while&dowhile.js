// In this java script file we show some case of while and do while loops

// 1. using while loop
const cityNames=["Kolkata","Malda","Raiganj","siliguri","jalpiguri","Kochbihar","Assam"];

i=0;

function wloop() {
  while (i<cityNames.length) {
    console.log(cityNames[i]);
    i++
  }
}

function dwloop() {

  do {
    console.log(cityNames[i]);
    i++
  } while (i<cityNames.length);
}

// wloop()
dwloop()
