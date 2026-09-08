const navLinks = document.querySelectorAll('.navbar a, .hero-buttons a')

navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));

        if (link.getAttribute('href') === '#projects') {
            const heading = target.querySelector('h2');
            const targetPosition =
                heading.getBoundingClientRect().top +
                window.scrollY -
                10;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

        } else {
            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                (window.innerHeight - target.offsetHeight) / 2;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

sections.forEach(function (section) {
    section.classList.add('reveal');
    observer.observe(section);
});
const themeToggle = document.querySelector('#themeToggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
