//start header menu button
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.header__menu-button');
    const menu = document.querySelector('.header__menu');
    const header = document.querySelector('.header');
    
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('active');
        menu.classList.toggle('active');
        header.classList.toggle('active');
    });
});
//end header menu button

//start cta sticky section
document.addEventListener('DOMContentLoaded', function() {
    const ctaSection = document.querySelector('.cta-section');
    const footer = document.querySelector('footer'); // або '.footer' залежно від вашого класу
    let isSticky = false;
    let originalTop = 0;
    let lastScrollTop = 0;
    
    // Get the original position when page loads
    window.addEventListener('load', function() {
        originalTop = ctaSection.offsetTop;
    });
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const sectionHeight = ctaSection.offsetHeight;
        
        // Calculate when section should become sticky (when bottom of section reaches bottom of viewport + extra offset)
        const stickyPoint = originalTop + sectionHeight - windowHeight + 200;
        
        // Check if user has reached the footer
        const footerTop = footer ? footer.offsetTop : document.documentElement.scrollHeight;
        const isAtFooter = scrollTop + windowHeight >= footerTop - 50; // 50px threshold
        
        // Check scroll direction
        const isScrollingUp = scrollTop < lastScrollTop;
        
        if (scrollTop >= stickyPoint && scrollTop > 100 && !isSticky && !isAtFooter) {
            // Make it sticky
            ctaSection.classList.add('sticky');
            ctaSection.classList.remove('hidden');
            isSticky = true;
        } else if (isAtFooter && isSticky && !isScrollingUp) {
            // Hide when at footer and scrolling down
            ctaSection.classList.add('hidden');
        } else if (isAtFooter && isSticky && isScrollingUp) {
            // Show when at footer and scrolling up
            ctaSection.classList.remove('hidden');
        } else if ((scrollTop < stickyPoint || scrollTop <= 100) && isSticky && !isAtFooter) {
            // Return to original position
            ctaSection.classList.remove('sticky');
            ctaSection.classList.remove('hidden');
            isSticky = false;
        }
        
        lastScrollTop = scrollTop;
    });
});
//end cta sticky section