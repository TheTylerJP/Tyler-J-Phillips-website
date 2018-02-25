// Responsive Navbar 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-icon-bar") {
        x.className += " responsive";
    } else {
        x.className = "top-icon-bar";
    }
}