// Problem: Hints are still showing
// Solution: Hide and show at the right time

// Hide the hints based on character length and validation
$("form span").hide();

function passwordEvent(){
    if ($(this).val().length > 8) {
        $(this).next().hide();
    } else {
        $(this).next().show();
    }
}

// Validate password characters
$("#password").focus(passwordEvent).keyup(passwordEvent);

// Confirmation box

// Check for password match in both boxes

// Hide hint if matched

// Show hint if not matched