// Different type of case is Using in js
// Different type of label case
// Ex admin ,student,teacher


var user="teacher"

switch (user) {
  case "admin":
      console.log("You Have Privilage to Create Read Update and Delete");
    break;
  case "student":
      console.log("You Login as a Learner");
    break;
  case "teacher":
      console.log("wellcome Teacher Please Teach your Student..");
    break;
  default:
      console.log("Please sign Up as Student/Teacher");

}
