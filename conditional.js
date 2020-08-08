var temperature;


  // TODO GO TO GOOGLE AND GET THE DATA

temperature =100;

var result=temperature<20;
console.log(result);

if (temperature<=20) {
    console.log(`it's very cold outside ${temperature}deg C `);
}
else if (temperature<=30) {
  console.log(`${temperature}deg C Weather is moderate you can go outside `);
}
else if (temperature<=40) {
  console.log(`${temperature}deg C Outside temperature is High Don't Go out side`);
}
else {
  console.log(`${temperature}deg C Within a minute You going to die`);
}
