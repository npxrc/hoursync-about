//fade in sections stuff
function $(e){return document.getElementById(e)}
// JavaScript for hover effects
document.addEventListener('DOMContentLoaded', () => {
    const tiltContainers = document.querySelectorAll('.project');
    let isMouseMoving = false;

    tiltContainers.forEach((container) => {
        container.style.transition = "all 250ms ease";
        container.style.willChange = "transform"; // Suggest to the browser that transform is changing frequently

        let tiltX = 0;
        let tiltY = 0;

        container.addEventListener('mousemove', (e) => {
            isMouseMoving = true;

            // Calculate tilt effect
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            tiltX = ((centerY - y) / centerY) * 20; // Adjust the multiplier for tilt effect
            tiltY = ((x - centerX) / centerX) * 20; // Adjust the multiplier for tilt effect

            // Scale the hovered container
            tiltContainers.forEach((otherContainer) => {
                if (otherContainer === container) {
                    otherContainer.style.transform = `scale(1.1) perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
                } else {
                    otherContainer.style.transform = "scale(0.95)";
                }
            });
        });

        container.addEventListener('mouseleave', () => {
            // Reset all containers' transforms when mouse leaves
            tiltContainers.forEach((cont) => {
                cont.style.transform = "scale(1) perspective(1000px) rotateX(0deg) rotateY(0deg)";
            });
            isMouseMoving = false;
        });

        // Use requestAnimationFrame for smoother transitions
        function animate() {
            if (isMouseMoving) {
                requestAnimationFrame(animate);
            }
        }
        animate(); // Start the animation loop
    });

    const heroDiv = document.querySelector('#hero div');
    const scrollPosition = window.scrollY;
    const heroHeight = document.querySelector('#hero').offsetHeight;
    const offset = window.innerHeight / 10;

    // Update the top property of the hero div
    heroDiv.style.top = `${scrollPosition + offset - 50}px`;

    // Adjust the opacity or z-index based on scroll position
    if (scrollPosition >= heroHeight) {
        heroDiv.style.zIndex = '0'; // Let the next sections come over
        heroDiv.style.opacity = '0'; // Optional: make it disappear as you scroll
    } else {
        heroDiv.style.zIndex = '1'; // Keep it on top of the hero
        heroDiv.style.opacity = '1'; // Make it fully visible
    }
});


const scrollArrow = document.getElementById('scroll-down-arrow');
scrollArrow.addEventListener('click', () => {
    const nextSection = document.querySelector('#about');
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

// opening projects
function openProject(name) {
    // Create the URL for the iframe (based on the name parameter)
    const iframeSrc = `assets/frames/${name}.html`;

    // Select the overlay and iframe elements
    const overlay = document.getElementById("overlay");
    const iframe = document.getElementById("iframe");

    // Set the iframe source to the correct file
    iframe.src = iframeSrc;

    // Show the overlay
    overlay.style.display = "flex";
    overlay.style.opacity = "1";

    // Add an event listener to close the overlay when clicked
    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            closeOverlay();
        }
    });
    document.addEventListener('keydown', function(e){
        if (e.key=="Escape"){
            closeOverlay();
        }
    })
    document.body.classList.add('overlay-open')
}

function closeOverlay() {
    // Hide the overlay
    document.getElementById('iframe-container').style.animation = 'slideDown 0.5s ease-in-out forwards';
    document.body.classList.remove('overlay-open')
    document.getElementById("overlay").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
        // Optionally, you can clear the iframe's src to stop it from continuing to load
        document.getElementById("iframe").src = "";
        document.getElementById('iframe-container').style.animation = 'slideUp 0.5s ease-in-out forwards';
    }, 500);
}

setTimeout(() => {
    grecaptcha.render('captcha', {
        'sitekey': '6LcBUJEqAAAAAIwY6EmAHXNdba7pucj_W-10q36B',
        'theme': 'dark'
    });
}, 100);

window.addEventListener('scroll', (e) => {
    const heroDiv = document.querySelector('#hero div');
    const scrollPosition = window.scrollY;
    const heroHeight = document.querySelector('#hero').offsetHeight;
    const offset = window.innerHeight / 10;

    // Update the top property of the hero div
    heroDiv.style.top = `${scrollPosition + offset - 50}px`;

    // Adjust the opacity or z-index based on scroll position
    if (scrollPosition >= heroHeight) {
        heroDiv.style.zIndex = '0'; // Let the next sections come over
        heroDiv.style.opacity = '0'; // Optional: make it disappear as you scroll
    } else {
        heroDiv.style.zIndex = '1'; // Keep it on top of the hero
        heroDiv.style.opacity = '1'; // Make it fully visible
    }
});