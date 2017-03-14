// Problem: Hints are still showing
// Solution: Hide and show at the right time
// Hide the hints based on character length and validation
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();

function isPasswordValid(){
    return $password.val().length > 8;
}

function arePasswordsMatching(){
    return $password.val() === $confirmPassword.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
    if (isPasswordValid()){
        $password.next().hide();
    } else {
        $password.next().show();
    }
}

function confirmPasswordEvent(){
    // Check for password match in both boxes
    // Hide hint if matched
    // Show hint if not matched
    if (arePasswordsMatching()){
        $confirmPassword.next().hide();
    } else {
        $confirmPassword.next().show();
    }
}

function enableSubmitEvent(){
    $("#submit").prop("disabled", !canSubmit())
}

// Validate password characters
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// Confirmation box
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// Executed on page load
enableSubmitEvent();