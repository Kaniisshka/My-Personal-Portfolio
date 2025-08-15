// ===== Scroll Animation =====
function revealOnScroll() {
    let reveals = document.querySelectorAll('.fade-in, .project-card');

    reveals.forEach(element => {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run once on page load

// ===== Dark Mode Toggle =====
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode')
        ? '☀ Light Mode'
        : '🌙 Dark Mode';
});

// ===== Typing Effect =====
const nameText = "Kanishka Bhardwaj";
let index = 0;

function typeWriter() {
    if (index < nameText.length) {
        document.getElementById("typingName").textContent += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // typing speed in ms
    } else {
        // Stop cursor blinking after typing is done
        document.getElementById("typingName").classList.remove("typing-cursor");
    }
}

// Start typing effect after page load
window.onload = () => {
    typeWriter();
    revealOnScroll(); // Keep your scroll animation working
};

