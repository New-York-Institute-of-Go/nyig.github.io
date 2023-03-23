// Toggling menu on and off
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.display = "block";
}

function hideMenu() {
    navLinks.style.display = "none";
}

if (document.getElementById("Hear")) {
    document.getElementById("Hear").selectedIndex = -1;
}
if (document.getElementById("Interest")) {
    document.getElementById("Interest").selectedIndex = -1;
}