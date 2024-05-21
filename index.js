// document.querySelector('header').addEventListener('click', function () {
//     const currentTheme = document.body.getAttribute('data-theme');
//     document.body.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
// });
window.addEventListener('scroll', function () {
    var parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(function (element) {
        var scrolled = window.scrollY;
        var rate = parseFloat(element.getAttribute('data-rate')) || 0.5; // Default rate is 0.5
        var isBackgroundImage = getComputedStyle(element).backgroundImage !== 'none';
        
        if (isBackgroundImage) {
            element.style.backgroundPositionY = -(scrolled * rate) + 'px';
        } else {
            element.style.transform = 'translateY(' + -(scrolled * rate) + 'px)';
        }
    });
});



function loadImages(type, count) {
    // Clear existing images
    thumbBar.innerHTML = '';

    // Base folder or path for images
    let basePath = "assets/portfolio_pictures/";

    // Choose the pattern based on the type
    let filenamePattern;
    if (type === "india") {
        filenamePattern = "india/india ";
    } else if (type === "cambridge") {
        filenamePattern = "cambridge/cambridge ";
    }
    else if (type === "london") {
        filenamePattern = "london/london ";
    }
    else {
        console.error("Invalid type specified");
        return;
    }

    // Load and append images according to the specified count and type
    for (let i = 1; i <= count; i++) {
        const link = document.createElement('a');
        link.className = 'gallery-link';
        link.href = `${basePath}${type}/${type} (${i}).JPG`;

        const figure = document.createElement('figure');
        figure.className = 'gallery-image';

        const image = document.createElement('img');
        image.src = `${basePath}${type}/${type} (${i}).JPG`;
        image.alt = `Gallery image ${i}`;

        figure.appendChild(image);
        link.appendChild(figure);
        thumbBar.appendChild(link);
    }
}
