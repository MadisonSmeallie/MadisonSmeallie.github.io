document.getElementById("sienaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
});