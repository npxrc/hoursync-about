//fade in sections stuff
function $(e){return document.getElementById(e)}
const fadeInSections = document.getElementsByTagName('section')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Uncomment the line below to stop observing after it becomes visible
            // observer.unobserve(entry.target);
        } else{
            entry.target.classList.remove('visible')
        }
    });
}, { threshold: 0.1 }); // Adjust the threshold as needed

// Observe each section
for (let element of fadeInSections){
    observer.observe(element)
}

const scrollArrow = document.getElementById('scroll-down-arrow');
scrollArrow.addEventListener('click', () => {
    const nextSection = document.querySelector('#about');
    nextSection.scrollIntoView({ behavior: 'smooth' });
});
