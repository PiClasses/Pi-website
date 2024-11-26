// script.js

$(document).ready(function () {
    // Show popup when the link is clicked
    $(".popup-link").on("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        $("#popup-container").fadeIn(); // Show the popup
    });

    // Close popup when the close button is clicked
    $(".close-btn").on("click", function () {
        $("#popup-container").fadeOut(); // Hide the popup
    });

    // Close popup when clicking outside the popup content
    $("#popup-container").on("click", function (e) {
        if ($(e.target).is("#popup-container")) {
            $(this).fadeOut(); // Hide the popup
        }
    });
});
