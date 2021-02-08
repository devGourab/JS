// using for in AND for of


// var companys=[
//   "youtube",
//   "facebook",
//   "google",
//   "twiter",
//   "netflix"
// ]
//
// for (var name of companys) {
//   console.log(name);
// }
var markCompany={
  yt:"youtube",
  fb:"facebook",
  goo:"google",
  tw:"twiter",
  nt:"netflix"
}

for (var logo in markCompany) {
  console.log(`Short name = ${logo} , comapny = ${markCompany[logo]}`);
}
