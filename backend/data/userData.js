import bcrypt from "bcrypt";

//Pwede niyo ibahin yung data dito na iimport niyo sa mongodb
// If mag import kayo send post request lang kayo sa postman using "http://localhost:3001/api/import/users"
const users = [
  {
    name: "Kei",
    email: "kei@admin.com",
    password: bcrypt.hashSync("121019", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "khaylle@user.com",
    password: bcrypt.hashSync("121019", 10),
  },
];

export default users;
