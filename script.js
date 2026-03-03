// =============================================
// DYNAMIC GREETING
// =============================================

// 1. Find the element we want to change
const greetingElement = document.getElementById('greeting');

// 2. Get the current hour (0-23)
const currentHour = new Date().getHours();

// 3. Create a variable to hold our text
let timeGreeting = "";

// 4. Decide which greeting to show based on time of day
if (currentHour < 12) {
    timeGreeting = "Good Morning, I'm Alroy.";
} else if (currentHour < 18) {
    timeGreeting = "Good Afternoon, I'm Alroy.";
} else {
    timeGreeting = "Good Evening, I'm Alroy.";
}

// 5. Update the text on the screen
if (greetingElement) {
    greetingElement.innerText = timeGreeting;
}


// =============================================
// MOBILE NAVIGATION TOGGLE
// =============================================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });
}


// =============================================
// STICKY NAV — add shadow on scroll
// =============================================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
    } else {
        header.style.boxShadow = 'none';
    }
});