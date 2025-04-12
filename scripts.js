// Function to set theme
function setTheme(isDarkMode) {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const logoName = document.querySelector('.logo-name');
    const githubIcon = document.querySelector('.social-icons a.github');
    const hobbies = document.querySelector('.hobbies');
    const hobbyImages = document.querySelectorAll('.hobby-image');
    const hobbyTexts = document.querySelectorAll('.hobby-item p');
    const themeToggle = document.getElementById('theme-toggle');

    if (isDarkMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        navbar.classList.remove('light-mode');
        navbar.classList.add('dark-mode');
        navbar.style.backgroundColor = '#3E3232';
        navLinks.forEach(link => {
            link.classList.remove('light-mode');
            link.classList.add('dark-mode');
            link.style.color = '#F6F5F2';
        });
        logoName.classList.remove('light-mode');
        logoName.classList.add('dark-mode');
        logoName.style.color = '#F6F5F2';
        githubIcon.classList.add('dark-mode');
        hobbies.classList.add('dark-mode');
        hobbyImages.forEach(image => {
            image.style.backgroundColor = '#fff';
            image.style.borderWidth = '2px';
            image.style.borderStyle = 'solid';
            image.style.borderColor = '#000';
        });
        hobbyTexts.forEach(text => {
            text.classList.add('dark-mode');
            text.style.color = '#F6F5F2';
        });
        themeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        navbar.classList.remove('dark-mode');
        navbar.classList.add('light-mode');
        navbar.style.backgroundColor = '#F6F5F2';
        navLinks.forEach(link => {
            link.classList.remove('dark-mode');
            link.classList.add('light-mode');
            link.style.color = '#3E3232';
        });
        logoName.classList.remove('dark-mode');
        logoName.classList.add('light-mode');
        logoName.style.color = '#3E3232';
        githubIcon.classList.remove('dark-mode');
        hobbies.classList.remove('dark-mode');
        hobbyImages.forEach(image => {
            image.style.backgroundColor = '#fff';
            image.style.borderWidth = '2px';
            image.style.borderStyle = 'solid';
            image.style.borderColor = '#000';
        });
        hobbyTexts.forEach(text => {
            text.classList.remove('dark-mode');
            text.style.color = '#666';
        });
        themeToggle.checked = false;
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
}

// Function to get saved theme preference
function getSavedTheme() {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true';
}

// Set initial theme based on saved preference
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = getSavedTheme();
    setTheme(isDarkMode);
});

// Theme toggle event listener
document.getElementById('theme-toggle').addEventListener('change', function() {
    setTheme(this.checked);
});

const htmlElement = document.documentElement;
const toggleMode = document.getElementById('toggle-mode');

toggleMode.addEventListener('click', () => {
  htmlElement.classList.toggle('light-mode');
  htmlElement.classList.toggle('dark-mode');
});

function openResume() {
    window.open('Resume.pdf', '_blank');
}

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    const percentage = skill.querySelector('.percentage');
    skill.addEventListener('mouseover', () => {
        percentage.textContent = '85%'; // Adjust this dynamically
    });
    skill.addEventListener('mouseout', () => {
        percentage.textContent = ''; // Reset on mouseout
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update the updateNavbarStyles function
function updateNavbarStyles() {
    var navbar = document.getElementById('navbar');
    var isDarkMode = document.body.classList.contains('dark-mode');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = isDarkMode ? '#3E3232' : '#F6F5F2';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
}

// Event listener for scroll events
window.addEventListener('scroll', function() {
    updateNavbarStyles();
});

// Event listener for theme toggle button
document.querySelector('.theme-toggle-btn input').addEventListener('change', function() {
    var navbar = document.getElementById('navbar');
    var isDarkMode = this.checked;

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        navbar.style.backgroundColor = '#3E3232'; // Dark mode background color for navbar
    } else {
        document.body.classList.remove('dark-mode');
        navbar.style.backgroundColor = '#F6F5F2'; // Light mode background color for navbar
    }

    updateNavbarStyles(); // Update navbar styles immediately
});

// Initial call to set navbar styles based on current theme mode and scroll position
updateNavbarStyles();

const typingText = document.querySelector('.typing-text');
const phrases = ['Vyshnavi', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let isWaiting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isWaiting) {
    setTimeout(() => {
      isWaiting = false;
      isDeleting = true;
      type();
    }, 1500);
    return;
  }
  
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, characterIndex - 1);
    characterIndex--;
    
    if (characterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, characterIndex + 1);
    characterIndex++;
    
    if (characterIndex === currentPhrase.length) {
      isWaiting = true;
    }
  }
  
  const speed = isDeleting ? 50 : 100;
  setTimeout(type, speed);
}

// Start the typing effect
type();