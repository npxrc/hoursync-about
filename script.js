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
});


const scrollArrow = document.getElementById('scroll-down-arrow');
scrollArrow.addEventListener('click', () => {
    const nextSection = document.querySelector('#about');
    nextSection.scrollIntoView({ behavior: 'smooth' });
});
