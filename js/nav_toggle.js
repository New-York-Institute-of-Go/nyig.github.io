// Toggling menu on and off
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.display = "block";
}

function hideMenu() {
    navLinks.style.display = "none";
}

document.getElementById("Hear").selectedIndex = -1;
document.getElementById("Interest").selectedIndex = -1;