function parallax() {
    var parallax = document.getElementById("parallax");
    // Adjust the position for the parallax effect
    parallax.style.top = -(window.pageYOffset / 4) + 'px'; // Slower scroll effect
    
    // Adjust opacity of the #text element based on scroll position
    var text = document.getElementById("text");
    var opacity = 1 - window.pageYOffset / 500; // Change opacity as you scroll (modify denominator for desired effect)
    // Ensure opacity stays within 0-1 range
    opacity = opacity < 0 ? 0 : opacity; 
    text.style.opacity = opacity; // Apply opacity to the text
}

window.addEventListener("scroll", parallax, false);
