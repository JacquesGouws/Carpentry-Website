// Define elements for script
const quoteForm = document.querySelector("#quote-form");
const submitBtn = document.querySelector("#submit-btn");

// Event listener on button click
submitBtn.addEventListener("click", function () {

  // Retrieve and trim values
  let name = document.getElementById("name-input").value.trim();
  let number = document.getElementById("number-input").value.trim();
  let email = document.getElementById("email-input").value.trim();
  let message = document.getElementById("message-input").value.trim();

  // Validate all fields before submitting
  if (!Validate.emptyField(name, number, email, message)) {
    if (Validate.isValidName(name)) {
      if (Validate.isValidCell(number)) {
        if (Validate.isValidEmail(email)) {
          quoteForm.submit();
        } 
        else {
            Alert.showAlert("invalid-email");}
      } 
      else {
        Alert.showAlert("invalid-number");}
    } 
    else {
        Alert.showAlert("invalid-name");}
  } 
  else {
    Alert.showAlert("empty-fields");}

});
