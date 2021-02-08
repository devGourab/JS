// using For Each


const cityNames=[
  "Kolkata",
  "Malda",
  "Raiganj",
  2020,
  "siliguri",
  "jalpiguri",
  "Kochbihar",
  "Assam"
];

// for loop using and check only string

// for (var i = 0; i < cityNames.length; i++) {
//   if (typeof cityNames[i]!=="string") {
//     continue;
//   }
//   else
//     console.log(cityNames[i]);
// }

// forEach loop using
cityNames.forEach((item, i) => {
  if (typeof item!=="string") {
  }
  else {
    console.log(item);
  }
});
