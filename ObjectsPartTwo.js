var User = {
  name: "",
  getUsername: function () {
    console.log(`User name is : ${this.name}`);
  }

}
var kernel = Object.create(User);
kernel.name="Kernel Gk_security"
console.log(kernel);
kernel.getUsername();

var sam = Object.create(User, {
  name: { value : "Samey" },
  courseCount:{ value: 3 }
});

sam.getUsername();
console.log(sam);
