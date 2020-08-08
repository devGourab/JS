// Function Using in Java Script

console.log(getuser("manav","trial"));

function getuser(name,role) {
  switch (role) {
    case "admin":
        return `${name} have all privillage `;
      break;

    case "subadmin":
    return `${name} have add and delete cources privillage`;
      break;

    case "user":
    return `${name} is a learner`;
      break;

    case "trial":
    return `${name} Please join our course To your Better Version`;
      break;

    default:
      return `wellcome ${name}`;

  }

}
