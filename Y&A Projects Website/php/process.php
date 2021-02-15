<?php

// Errors
$nameError = "";
$numberError = "";
$emailError = "";
$messageError = "";

if ($_SERVER["REQUEST_METHOD"] == "POST"){

    // Validate Name.
    if (empty($_POST["name"])) {
        $nameError = "Name is required";
    } 
    else {
        $name = test_input($_POST["name"]);
    }

    // Validate Number.
    if (empty($_POST["number"])) {
        $numberError = "number is required";
    } 
    else {
        $number = test_input($_POST["number"]);
        if(!preg_match('/^[0-9]{10}+$/', $number)) {
            $numberError = "Invalid number format";
        }
    }

    // Validate Email
    if (empty($_POST["email"])) {
        $emailError = "Email is required";
    } 
    else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailError = "Invalid email format";
        }
    }

    // Validate Message.
    if (empty($_POST["message"])) {
        $messageError = "Message is required";
    } 
    else {
        $message = test_input($_POST["message"]);
    }

    if($nameError == "" && $numberError == "" && $emailError == "" && $messageError == ""){
        sendMail($name, $number, $email, $message);
        header("Location: http://yaprojects.co.za/process_complete.html");
    }

}

// Trim and sanitize data
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

// Send email to site owner with only valid data
function sendMail($name, $number, $email, $message){
    mail("quotes@yaprojects.co.za", "Website Enquiry From " . $name, wordwrap($message, 70) . " Contact number: " . $number . " Contact email: " . $email);
}
