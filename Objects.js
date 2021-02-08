var User = function(firstName, courseCount){
  this.firstName = firstName;
  this.courseCount= courseCount;
  this.getCourseCount=function(){
    console.log(`Course count Is: ${this.courseCount}`);
  }
}
User.prototype.getFirstname = function () {
  console.log(`Your name is :${this.firstName}`);
}

var kernel= new User("Kernel",15)
kernel.getCourseCount()
kernel.getFirstname()
// console.log(kernel);

var sam = new User("sam",5)
sam.getCourseCount()
sam.getFirstname()
// console.log(sam);
