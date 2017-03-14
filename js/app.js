// Problem: Hints are still showing
// Solution: Hide and show at the right time

// Hide the hints based on character length and validation
$("form span").hide();

// Validate password characters
$("#password").focus(function() {

    // Hide if valid
    if ($(this).val().length > 8) {
        $(this).next().hide();
        // Else show the hint for password
    } else {
        $(this).next().show();
    }

});

// Confirmation box

// Check for password match in both boxes

// Hide hint if matched

// Show hint if not matched