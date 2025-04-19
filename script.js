document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Alert on contact button click
    const contactButton = document.querySelector('.welcomepage button a');
    contactButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action
        alert('Contacting us...');
        window.location.href = this.href; // Proceed to the phone link
    });
});


document.addEventListener('DOMContentLoaded', function() {
            const check = document.getElementById('check');
            const menu = document.getElementById('menu');
            const navLinks = document.querySelectorAll('nav ul li a');
            
            // Close menu when a link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    // Uncheck the checkbox to close the menu
                    check.checked = false;
                    // Add class to ensure menu stays hidden
                    menu.classList.add('menu-hidden');
                    
                    // Store scroll position before navigation
                    sessionStorage.setItem('scrollPosition', window.scrollY);
                });
            });
            
            // Handle browser back/forward navigation
            window.addEventListener('pageshow', function(event) {
                // Close the menu when page is shown (including back/forward navigation)
                check.checked = false;
                menu.classList.add('menu-hidden');
                
                // Restore scroll position if it was stored
                const scrollPosition = sessionStorage.getItem('scrollPosition');
                if (scrollPosition) {
                    window.scrollTo(0, parseInt(scrollPosition));
                    sessionStorage.removeItem('scrollPosition');
                }
            });
            
            // Toggle menu visibility when checkbox is clicked
            check.addEventListener('change', function() {
                if (this.checked) {
                    menu.classList.remove('menu-hidden');
                } else {
                    menu.classList.add('menu-hidden');
                }
            });
        });