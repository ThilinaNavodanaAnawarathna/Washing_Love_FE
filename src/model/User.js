export default class User {
  constructor(id, firstName, lastName, email, role, password, token) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.token = token;
  }
}