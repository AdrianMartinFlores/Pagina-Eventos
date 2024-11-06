document.addEventListener("DOMContentLoaded", function() {
    // Ensure the body fade-in effect is applied

    // Add a slight delay to ensure the overlay and text animations are visible
    setTimeout(function() {
        document.querySelector('.black-overlay').classList.add('visible');
    }, 100); // Delay to ensure the overlay transition is visible

    setTimeout(function() {
        document.querySelector('.presText').classList.add('animate');
    }, 200); // Delay to ensure the text animation is visible
});