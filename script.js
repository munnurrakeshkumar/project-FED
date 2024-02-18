// script.js

// Function to detect if the device is a phone
function isPhone() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Function to apply responsive styles based on the device width
function applyResponsiveStyles() {
    if (isPhone()) {
        // Apply styles for phones
        document.querySelector('link[media]').href = 'phone.css';
    } else {
        // Apply styles for desktops
        document.querySelector('link[media]').href = 'style.css';
    }
}

// Apply responsive styles when the page loads
window.onload = applyResponsiveStyles;

// Apply responsive styles when the window is resized
window.onresize = applyResponsiveStyles;
