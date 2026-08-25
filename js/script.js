// ============================================
// AWS STATIC WEBSITE HOSTING
// Portfolio Website JavaScript
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Gokul Raj Portfolio loaded successfully.");

    // Navigation link logging
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            console.log("Navigating to: " + link.textContent);
        });

    });


    // Contact form functionality
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // Prevent page reload
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic validation
            if (name === "" || email === "" || message === "") {

                alert("Please fill in all the fields.");

                return;
            }

            // Display success message
            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );

            // Clear the form
            contactForm.reset();

        });

    }

});
