// Inahritance

class User{

  constructor(name, email){
    this.name = name;
    this.email = email;
  }

  // # is use for Private variable
  #courseList=[];

  getInfo(){
    return{ name:this.name, email:this.email };
  }

  enrollCourse(name){
    this.#courseList.push(name);
  }

  getCourseList(){
    return this.#courseList;
  }

  login()
  {
    console.log('Admin Login')
    return "You are Login";
  }
};

class Subadmin extends User{
  constructor(name, email){
    super(name, email);
  }

  getAdminInfo(){
    return "I am subAdmin"
  }

  login(){
    // super.login()
    return "Login For Admin only"
  }
};

module.exports = User;

const rock = new User("rock","rook@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("AngularBootCamp");
console.log(rock.getCourseList());
console.log(rock.courseList);

const tom = new Subadmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login())
console.log(tom.getInfo())
console.log()