var isLoggedin = true;
var isEmailVerified = true;
var cardInfo = true;


// This is Simple code

// if (isLoggedin) {
//   console.log(`Logged in Sucessfull`);
//   if (isEmailVerified) {
//     console.log(`Email Verified Sucessfull`);
//
//     if (cardInfo) {
//       console.log(`Card Number is valid`);
//
//     }
//     else {
//       console.log(`Card Number is INVALID Please Enter a valid Card Number`);
//     }
//
//   }
//   else {
//     console.log(`Your Email id is Not verified`);
//   }
//
// }
// else {
//   console.log(`Please log in with your User name and Password`);
// }

if (isLoggedin&&isEmailVerified&&cardInfo) {
  console.log(`You complete All step`);
}
else {
  console.log("Please check your all credentials");
}
