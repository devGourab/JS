// Bind and Calling Methods

const kernel = {
  firstname: "Kernel",
  lastname: "kali",
  role: "admin",
  project: 10,
  completeProject: 5,

  getInfo: function()
  {
    console.log(`
      First Name  is : ${this.firstname},
      Last Name is : ${this.lastname},
      His Role is : ${this.role},
      Total complete Project : ${this.completeProject}
    `)
  }
}

const userTemp1 = {
  firstname: "robin",
  lastname: "kali",
  role: "user",
  project: 00,
  completeProject: 0,
}

// Reference is :getInfo  and Calling Is : getInfo()

// kernel.getInfo()
// use bind method to get userTemp1 info
// var user=kernel.getInfo.bind(userTemp1);  //bind Send Reference
// user() // to get output calling is mendetory

// using call
kernel.getInfo.call(userTemp1); // call Directly Call
