// using function in object



var user = {
  firstname: "kernel",
  lastname: "Gksecurity",
  role: "editor",
  level: 10,
  Gksecurity: true,
  inCompany:true,
  company: "Gksecurity",

  permission: [],
  addLevel: function (levelName) {
    this.permission.push(levelName);
  },
  countpermission: function () {
    console.table(this.permission);
    return `\nHello ${this.firstname} You have Total ${this.permission.length} permission\n`;
  },
  getDetails: function () {

    return `\n${this.firstname} ${this.lastname}.\nworking as a ${this.role} in ${this.company}. \nlevel is ${this.level}.`;
  }
};



// console.log(user.firstname);
// console.log(user.getDetails());
user.addLevel("read")
user.addLevel("write")
console.log(user.countpermission());
