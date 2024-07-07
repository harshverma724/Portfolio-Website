// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});
