// Problem: Hints are still showing
// Solution: Hide and show at the right time
// Hide the hints based on character length and validation
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();

function passwordEvent(){
    if ($password.val().length > 8) {
        $password.next().hide();
    } else {
        $password.next().show();
    }
}

function confirmPasswordEvent(){
    // Check for password match in both boxes
    // Hide hint if matched
    // Show hint if not matched
    if ($password.val() === $confirmPassword.val()){
        $confirmPassword.next().hide();
    } else {
        $confirmPassword.next().show();
    }
}

// Validate password characters
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

// Confirmation box
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);