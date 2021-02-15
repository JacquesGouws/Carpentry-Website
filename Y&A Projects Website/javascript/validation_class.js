class Validate {
    
  // Check if empty field exists
  static emptyField(name, cell, email, message) {
    if ((name == "") | (cell == "") | (email == "") | (message == "")) {
      return true;
    } else {
      return false;
    }
  }

  // Validate name
  static isValidName(name) {
    let regExp = /^[A-Za-z]+$/;
    if (name.match(regExp)) {
      return true;
    } else {
      return false;
    }
  }

  // Validate phone number
  static isValidCell(cell) {
    let regExp = /^\d{10}$/;
    if (cell.match(regExp)) {
      return true;
    } else {
      return false;
    }
  }

  // validate email
  static isValidEmail(email) {
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(regExp)) {
      return true;
    } else {
      return false;
    }
  }

}
