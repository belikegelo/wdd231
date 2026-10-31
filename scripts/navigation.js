
document.addEventListener('DOMContentLoaded', function () {

    // Get hamburger button and nav menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    // Toggle menu on hamburger click
    if (hamburger && navMenu) {

        hamburger.addEventListener('click', function () {

            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Update accessibility attribute
            const isOpen = hamburger.classList.contains('active');

            hamburger.setAttribute('aria-expanded', isOpen);

        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {

            link.addEventListener('click', function () {

                hamburger.classList.remove('active');
                navMenu.classList.remove('active');

                hamburger.setAttribute('aria-expanded', 'false');

            });

        });

    }

});
