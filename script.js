// Fade-in effect on scroll
const fadeInSections = document.querySelectorAll('.fade-in-section');

const options = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
    });
}, options);

fadeInSections.forEach(section => {
    observer.observe(section);
});
